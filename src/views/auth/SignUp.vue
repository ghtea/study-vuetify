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
              label="이메일"
              clearable
              outlined
            />
            <v-text-field
              label="비밀번호"
              clearable
              outlined
            />
            <v-text-field
              label="비밀번호 확인"
              clearable
              outlined
            />
            <v-btn
              block
              x-large
              color="primary"
              depressed
              class="font-weight-bold mt-6"
            >
              회원가입
            </v-btn>

            <v-row
              align="center"
              justify="space-around"
              class="mt-2"
            >
              <v-btn
                text
                to="/auth/log-in"
              >
                로그인
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
  name: "AuthSignUp",
  directives: {
    GoogleSignInButton
  },
  data: () => ({
    clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`
  }),
  methods: {
    OnGoogleAuthSuccess (idToken) {
      console.log('succeed')
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log('failed')
      console.log(error)
    }
  }
};
</script>
<style >
</style>
