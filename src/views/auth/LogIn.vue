<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-12">
            <v-btn
              text
              class="text-h4 font-weight-black mb-10"
              to="/"
            >
              <v-icon
                x-large
                color="primary"
                class="mr-2"
              >
                mdi-home-variant
              </v-icon>
              내일의 집
            </v-btn>

            <v-text-field
              v-model="email"
              type="email"
              label="이메일"
              clearable
              outlined
            />
            <v-text-field
              v-model="password"
              type="password"
              label="비밀번호"
              clearable
              outlined
            />
            <v-btn
              block
              x-large
              color="primary"
              depressed
              class="font-weight-bold mt-6"
              @click="logIn"
            >
              로그인
            </v-btn>
            <v-row
              align="center"
              justify="space-around"
              class="mt-2"
            >
              <v-btn
                text
                to="/auth/sign-up"
              >
                회원가입
              </v-btn>
            </v-row>
            <v-btn
              v-google-signin-button="clientId"
              block
              x-large
              depressed
              dark
              color="#DD4B39"
              class="font-weight-bold mt-12 continue-with-google"
            >
              Google로 계속하기
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {
  name: "AuthLogIn",
  directives: {
    GoogleSignInButton
  },
  data: () => ({
    email: "",
    password: "",
    clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`
  }),
  methods: {
    logIn() {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password });
    },
    OnGoogleAuthSuccess (idToken) {
      console.log('succeed')
      this.$store.dispatch('continueWithGoogle', idToken);
    },
    OnGoogleAuthFail (error) {
      console.log('failed')
      console.log(error)
    }
  }
};
</script>
<style lang=""></style>
