<template>
 <div>
    <b-form class="mt-2">
      <b-row>
        <b-col class="col-6 offset-sm-3">
           <b-form-group
              label="Tarefa:"
              label-for="title"
            >
              <b-form-input
                id="title"
                v-model="form.title"
                type="text"
                placeholder="Escreva alguma atividade importante!"
                required
              ></b-form-input>

            </b-form-group>
        </b-col>

        <b-col class="col-6 offset-sm-3">
           <b-form-group
              label="Descrição:"
              label-for="description"
            >
              <b-form-textarea
                id="description"
                v-model="form.description"
                type="text"
                placeholder="Detalhes da tarefa"
                required
              ></b-form-textarea>

            </b-form-group>
        </b-col>

        <b-col class="col-6 offset-sm-3 mt-3">
          <b-button @click="saveTask" type="button" pill variant="success" style="margin-right:4px">Salvar</b-button>
          <b-button type="reset" pill variant="secondary">Limpar</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
  import { db } from '../firebaseDB'
  import Vue from 'vue'

  export default {
    name: 'FormView',
    data() {
      return {
        form: {
          title: '',
          description: '',
        },
      }
    },
    methods: {
      saveTask() {
        db.collection('tasks').add(this.form).then(() => {
          this.clearForm();
          this.makeToast();
          this.$router.push({name:'list'});
        })
      },
      clearForm() {
        this.form.title = '';
        this.form.description = '';
      },
      makeToast(append = false) {
        const vm = new Vue();
        vm.$bvToast.toast(`Tarefa salva com sucesso`, {
          title: 'Sucesso',
          autoHideDelay: 4000,
          variant: 'success',
          appendToast: append
        })
      }
    }
  }
</script>
