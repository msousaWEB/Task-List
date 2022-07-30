<template>
  <div>
    <div class="d-flex justify-content-center" v-for="task in tasks" :key="task.id">
      <div class="col-6 mt-4">
        <b-card :title="task.title">
          <b-card-text>
            {{task.description}}
          </b-card-text>

          <b-button variant="primary" pill class="mr-2">Editar</b-button>
          <b-button variant="danger" pill class="mr-2">Excluir</b-button>

        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebaseDB'
export default {
  name: 'ListView',
  data() {
    return {
      tasks: []
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
    }
  }
}
</script>
