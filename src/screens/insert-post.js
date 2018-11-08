import React, { Component } from 'react';
import styled from 'styled-components';

import PageTitle from '../components/page-title';
import TextInput from '../components/text-input';
import AttachmentField from '../components/attachment-field';
import StdButton from '../components/std-button';
import NewPostActions from '../components/new-post-actions';

const PageContainer = styled.div`
  background-color: #f1f3f6;
  min-height: 100vh;
  padding-bottom: 160px;
`;
const PageContent = styled.div`
  max-width: 664px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height: 338px;
  margin-top: 40px;
  border: 0;
  padding: 20px;
  font-size: 16px
`;

export default class InsertPost extends Component {

  render() {
    return (
      <PageContainer>
        <PageContent>
          <PageTitle title="Novo post" />
          <TextInput type="text" label="Título do post" placeholder="Digite o título do post" />
          <AttachmentField />
          <Textarea placeholder="Insira o conteúdo aqui"></Textarea>
          <NewPostActions />
        </PageContent>
      </PageContainer>
    )
  }

}