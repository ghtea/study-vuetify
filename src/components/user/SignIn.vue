<template>
  <v-app id="inspire">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6 lg4>
          <v-card flat>
            <v-btn width="100%" height="70px" color="success" to="/"
              >내일의 집</v-btn
            >
            <v-form>
              <v-text-field
                class="mt-5"
                name="email"
                label="이메일"
                type="text"
                :rules="emailRules"
                v-model="e_Mail"
                outlined
                required
                
              ></v-text-field>
              <v-text-field
                name="password"
                label="비밀번호"
                type="password"
                outlined
              ></v-text-field>
            </v-form>

            <v-btn 
              width="100%" 
              height="70px" 
              color="primary"
            >로그인</v-btn>

            <v-btn
              elevation="0"
              width="50%"
              color="white"
              to="/user/pwdReset"
              tile
              >비밀번호 재설정</v-btn
            >
            <v-btn
              elevation="0"
              width="50%"
              color="white"
              to="/user/reg"
              tile
              >회원가입</v-btn
            >
          </v-card>

          
        </v-flex>
        
      </v-layout>
    </v-container>
  </v-app>

  
</template>

<script>
export default {
  data: () => ({
    e_Mail: "",
    emailRules: [],
  }),
  watch: {
    e_Mail: function (mail) {
      // e_Mail is the exact name used in v-model
      if (mail !== "") {
        this.emailRules = [
          (v) =>
            v.match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) || "이메일을 확인해주세요",
        ];
      } else if (mail === "") {
        this.emailRules = [];
      }
    },
  componenets : {
    
  }
  },
};
</script>

