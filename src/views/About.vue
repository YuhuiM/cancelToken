<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  import { AApi, BApi, CApi } from '../api';
  import axios from 'axios';

  export default {
    name: 'about',
    mounted() {
      AApi().catch(err => {
        if (axios.isCancel(err)) {
          console.log('请求被关闭了');
        } else {
          console.log('请求出问题了');
        }
      });

      BApi().catch(err => {
        if (axios.isCancel(err)) {
          console.log('请求被关闭了');
        } else {
          console.log('请求出问题了');
        }
      });

      CApi().catch(err => {
        if (axios.isCancel(err)) {
          console.log('请求被关闭了');
        } else {
          console.log('请求出问题了');
        }
      });
    }
  }
</script>
