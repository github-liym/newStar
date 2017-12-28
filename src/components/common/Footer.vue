<template>
	<footer id="footer">
    <p>
      {{footer.copyright}}<br>
      {{footer.company}}<br>
      {{footer.numberLabel}}：<span class="text-595853">{{footer.number}}</span>
    </p>
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
    padding: 25px 0px;
    background: #323232;
    color: #fff;
    text-align: center;
    >p {
      display: inline-block;
      font-size: 12px;
      color: #fff;
      margin: 0;
      line-height: 17px;
      text-align: left;
    }
  }
</style>
