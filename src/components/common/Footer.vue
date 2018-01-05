<template>
	<footer id="footer">
    <div class="wrap1200 clearfix">
      <ul class="fl">
        <li v-for="item in footer.nav">
          <router-link :to="{path: item.href}">{{item.title}}</router-link>
        </li>
      </ul>
      <div class="fr">
        <p>{{footer.copyright}}</p>
        <p>{{footer.number}}</p>
      </div>
    </div>
  </footer>
</template>

<script>
	export default {
		name: 'Footer',
    props: ['footer']
  }
</script>

<style lang="scss">
  #footer {
    padding: 15px 0px 5px;
    background: #323232;
    color: #fff;
    font-size: 14px;
    >.wrap1200 {
      padding: 0 30px;
      line-height: 1.2;
    }
    .fl,.fr {
    }
    .fl {
      margin-bottom: 8px;
      li {
        display: inline-block;
        margin-left: 30px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
    .fr {
      color: #767676;
      p {
        margin: 0 0 5px;
      }
    }
  }


  @media (max-width: 992px) {
    #footer {
      .fl {
        li {
          margin-left: 20px;
        }
      }
    }

  }
  @media (max-width: 768px) {
    #footer {
      font-size: 12px;
      >.wrap1200 {
        padding: 0;
      }
      .fl,.fr {
        width: 100%;
        text-align: center;
      }
      .fr {
        color: #767676;
        p {
          margin: 0 0 5px;
        }
      }
    }
  }
</style>
