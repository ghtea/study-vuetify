<template>
  <v-app id="inspire">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6 lg4>
          <v-card flat>
            <h2>회원가입</h2>
            <div class="pa-10">
              <p class="text-center">SNS 계정으로 간편하게 회원가입</p>
              <v-row class="px-16">
              <v-col>
              <v-btn color="primary ">F</v-btn>
              </v-col>
              <v-col>
              <v-btn color="yellow">K</v-btn>
              </v-col>
              <v-col>
              <v-btn color="success">N</v-btn>
              </v-col>
              </v-row>
            </div>
            <v-divider class="mb-5" />
            
            <p class="mt-5"><strong>이메일</strong></p>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  class="mx-auto"
                  outlined
                  placeholder="이메일"
                ></v-text-field>
              </v-col>

              <v-col cols="1" class="mt-3">
                <p class="mx-auto">@</p>
              </v-col>

              <v-col cols="5">
                <v-combobox outlined> </v-combobox>
              </v-col>
            </v-row>

            <p class="mt-5">
              <strong>비밀번호</strong>
            </p>
            <p>8자 이상 입력해주세요.</p>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  type="password"
                  class="mx-auto"
                  outlined
                  placeholder="비밀번호"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <p class="mt-5">
              <strong>비밀번호 확인</strong>
            </p>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  type="password"
                  class="mx-auto"
                  outlined
                  placeholder="비밀번호 확인"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <p class="mt-5">
              <strong>별명</strong>
            </p>
            <p>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</p>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  type="password"
                  class="mx-auto"
                  outlined
                  placeholder="별명 ( 2~15자 )"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-btn width="100%" height="70px" color="primary">회원가입 완료</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>