<template>
<div class="container dummy">
  <div class="row justify-content-center dummy__wrap align-content-center">
    <div class="col-md-6 col-sm-12">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Сайт в разработке</h5>
          <p class="card-text">Сайт находится в разработке. Но скоро вы сможете его увидеть</p>
          <form action="">
            <div class="form-group form-check">
              <label class="form-check-label">
                <span>Введите код
                  <span class="my-tooltip">
                    <i class="far fa-question-circle my-tooltip__title"></i>
                    <span class="my-tooltip__text">Введите код для получения полного доступа к сайту</span>
                  </span>
                </span>
                <input type="password"
                       class="form-control"
                       :class="{'is-invalid' : !isValid}"
                       v-model="code"
                       @keydown="resetStatus">
                <div class="invalid-feedback">
                  Please provide a valid code.
                </div>
              </label>
            </div>
            <button class="btn btn-primary" @click.prevent="logIn">Залогиниться</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Dummy',
  data () {
    return {
      code: '',
      isValid: true
    }
  },
  methods: {
    logIn () {
      fetch('./code.json')
        .then(resp => resp.json())
        .then(json => {
          if (json.code === this.code) {
            this.$cookie.set('loggedIn', true, { expires: '1h' })
            this.$router.push('/')
          } else {
            this.isValid = false
          }
        })
        .catch(err => console.error(err))
    },
    resetStatus () {
      this.isValid = true
    }
  }
}
</script>

<style lang="scss">
  .dummy {

    &__wrap {
      min-height: calc(100vh - 100px);
    }
  }

  .my-tooltip {
    position: relative;

    i {
      color: #aaa;
    }

    &__title {

      &:hover + .my-tooltip__text {
        display: block;
      }
    }

    &__text {
      display: none;
      background-color: rgba(0, 0, 0, .8);
      position: absolute;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      color: white;
      font-size: 12px;
      border-radius: 5px;
      padding: 5px;

      &:before {
        content: '';
        position: absolute;
        border: 4px solid transparent;
        border-top-color: rgba(0, 0, 0, .8);
        left: 50%;
        transform: translateX(-50%);
        bottom: -8px;
      }
    }
  }
</style>
