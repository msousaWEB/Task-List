<template>
  <div>
    <div class="d-flex justify-content-center" v-for="task in tasks" :key="task.id">
      <div class="col-6 mt-4">
        <b-card :title="task.title">
          <b-card-text>
            {{task.description}}
          </b-card-text>

          <b-button variant="primary" pill class="mr-2" @click="updateTask(task.id)">Editar</b-button>
          <b-button variant="danger" pill class="mr-2" @click="deleteTask(task)">Excluir</b-button>

        </b-card>
      </div>
    </div>

      <b-modal ref="modalDelete" hide-footer title="Exluir tarefa">
        <div class="d-block text-center">
          <h3>Deseja exluir a tarefa: {{taskSelected.title}} ?</h3>
        </div>
        <div class="mt-3 d-flex justify-content-end">
            <b-button variant="secondary" @click="hideModal">Cancelar</b-button>
            <b-button class="ml-2" variant="danger" @click="confirmDeleteTask">Excluir</b-button>
        </div>
    </b-modal>

  </div>
</template>

<script>
import {db} from '../firebaseDB'
import Vue from 'vue'
export default {
  name: 'ListView',
  data() {
    return {
      tasks: [],
      taskSelected: ''
    }
  },
  created(){
    this.getTasks();
  },
  methods: {
    getTasks() {
      this.tasks = [];
      db.collection('tasks').get().then(snapshot => {
        snapshot.forEach(doc => {
          let objTask = {};
          objTask = doc.data();
          objTask.id = doc.id;
          this.tasks.push(objTask);
        });
      }).catch(error => {
        console.log(error);
      })
    },
    updateTask(idTask) {
      this.$router.push({name: 'form', params: {id: idTask}})
    },
    deleteTask(task) {
      this.taskSelected = task;
      this.$refs.modalDelete.show();
    },
    hideModal() {
      this.$refs.modalDelete.hide();
    },
    async confirmDeleteTask() {
      await db.collection('tasks').doc(this.taskSelected.id).delete();
      this.taskSelected = '';
      this.hideModal();
      this.getTasks();
      this.makeToast();
    },
    makeToast() {
        const vm = new Vue();
        vm.$bvToast.toast(`Tarefa excluida com sucesso!`, {
          title: 'Sucesso',
          autoHideDelay: 4000,
          variant: 'info',
        })
      }
  }
}
</script>
