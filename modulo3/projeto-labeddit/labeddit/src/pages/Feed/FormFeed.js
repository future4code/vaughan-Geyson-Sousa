import {criarPost} from '../../services/Requests'
import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import useUnProtectedPage from '../../hooks/useUnprotectPage';



function FormFeed() {

  const [form, onChange, clear] = useForm({ title: "", body: "" })
  useUnProtectedPage()

  const submit = (ev) => {
    ev.preventDefault()
    criarPost(form, clear)

  }

  return (
    <div>
      <h1>Feed</h1>
      <form onSubmit={submit}>
        <input
          name={"title"}
          value={form.title}
          onChange={onChange}
          placeholder="Titulo do Post"
          required>
  
        </input>
        <input
          value={form.body}
          onChange={onChange}
          placeholder=" Descrição do Post "
          name={"body"}
          required>

          </input>
          <button type='submit'>Criar</button>
      </form>
    </div>
  );
}

export default FormFeed;