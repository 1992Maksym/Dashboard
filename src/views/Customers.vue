<script>
import Input from "@/components/Input.vue";

export default {
  name: "Customers",
  components: {
    'app-input': Input,
  },
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    checkValue() {
      console.log(this.searchValue)
    }
  }
}
</script>

<template>
  <div class="customers">
    <div class="customers__title main__title">Hello Evano 👋🏼,</div>
    <div class="content">
      <div class="content__header">
        <div class="content__header-main header-main">
          <div class="content__title">All Customers</div>
          <div class="content__status">Active Members</div>
        </div>
        <div class="content__search">
          <div class="content__search-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <div class="form-control">
            <app-input
                v-model:value="searchValue"
                placeholder="search"
                @update:value="checkValue"
            ></app-input>
          </div>
        </div>
      </div>
      <div class="content__body">
        <div class="content__body-groups">
          <div class="customer__name">Customer Name</div>
          <div class="customer__company">Company</div>
          <div class="customer__phone">Phone Number</div>
          <div class="customer__email">Email</div>
          <div class="customer__country">Country</div>
          <div class="customer__status">Status</div>
        </div>
        <div class="content__body-customers">
          <div class="customer__name"></div>
          <div class="customer__company"></div>
          <div class="customer__phone"></div>
          <div class="customer__email"></div>
          <div class="customer__country"></div>
          <div class="customer__status"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles';

  .customers {
    padding: 41px 95px 258px 71px;
    background-color: $customers-light-turquoise;
    height: 100%;

    .customers__title {
      font-size: 32px;
      font-weight: 500;
    }
    .main__title {
      margin-bottom: 51px;
    }
    .content {
      background-color: #ffffff;
      border-radius: 10px;

      .content__header {
        padding: 30px 53px 40px 38px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .content__header-main {
          display: flex;
          flex-direction: column;

          .content__title {
            font-size: 30px;
            font-weight: 500;
          }
          .content__status {
            font-size: 18px;
            color: #16C098;
          }
        }
        .content__search {
          display: flex;
          padding: 7px 8px;
          background-color: $customers-light-turquoise;
          border-radius: 8px;

          .content__search-icon {
            height: 24px;
          }

        }
      }
      .content__body-groups {
        display: grid;
        grid-template-columns: 2fr 1fr 2fr 3fr 2fr 1fr;
        font-size: 16px;
        color: $customers-light-grey;
        padding: 0 67px 14px 38px;
        border-bottom: 1px solid $customers-light-grey;
      }
    }
  }
</style>