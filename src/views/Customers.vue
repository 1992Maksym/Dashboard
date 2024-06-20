<script>
import Input from "@/components/Input.vue"
import { mapMutations, mapGetters } from 'vuex'


export default {
  name: "Customers",
  components: {
    'app-input': Input,
  },
  data() {
    return {
      searchValue: '',
    }
  },
  computed: {
    ...mapGetters('customersData',['getData'])
  },
  methods: {
    ...mapMutations({getCustomers: 'customersData/getCustomers', getFilterCustomers: 'customersData/getFilterCustomers'}),

    checkValue() {
      this.getFilterCustomers({value: this.searchValue})
    }
  },
  mounted(){
    this.getCustomers();
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
        <div class="content__body-wrap">
          <div class="content__body-customers" v-for="person in getData" :key="person.id">
            <div class="customer__name">{{ person.name }}</div>
            <div class="customer__company">{{ person.company }}</div>
            <div class="customer__phone">{{ person.phone }}</div>
            <div class="customer__email">{{ person.email }}</div>
            <div class="customer__country">{{ person.country }}</div>
            <div class="customer__status" :class="person.status">{{ person.status }}</div>
          </div>
        </div>
      </div>
      <div class="content__footer">
        <div class="content__footer-info">Showing data 1 to 8 of  256K entries</div>
        <div class="content__footer-pagination">
          <div class="pagination__arrow pagination__item">
            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.936 6.392L0.176 3.668L2.936 0.944H4.664L1.892 3.668L4.664 6.392H2.936Z" fill="#404B52"/>
            </svg>
          </div>
          <div class="pagination__page pagination__item active">1</div>
          <div class="pagination__page pagination__item">2</div>
          <div class="pagination__page pagination__item">3</div>
          <div class="pagination__page pagination__item">4</div>
          <div class="pagination__dots pagination__item">...</div>
          <div class="pagination__page pagination__item">40</div>
          <div class="pagination__arrow pagination__item">
            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.344 0.944H2.072L4.832 3.668L2.072 6.392H0.344L3.116 3.668L0.344 0.944Z" fill="#404B52"/>
            </svg>
          </div>
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
      font-size: 24px;
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
            font-size: 22px;
            font-weight: 500;
          }
          .content__status {
            font-size: 14px;
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
        font-size: 14px;
        color: $customers-light-grey;
        padding: 20px 44px 20px 38px;
        border-bottom: 1px solid $customers-light-grey;
      }
      .content__body-wrap {
        padding: 0 44px 0 38px;

        .content__body-customers {
          display: grid;
          grid-template-columns: 2fr 1fr 2fr 3fr 2fr 1fr;
          font-size: 16px;
          padding: 20px 0;
          border-bottom: 1px solid $customers-light-grey;
          color: $customers-dark;

          .customer__name,
          .customer__phone,
          .customer__company,
          .customer__country,
          .customer__email,
          .customer__status{
            font-weight: 500;
          }
          .customer__status.active {
            background-color: $customers-active;
            color: $customers-active-text;
            border: 1px solid $customers-active-text;
            border-radius: 5px;
          }
          .customer__status.inactive {
            background-color: $customers-inactive;
            color: $customers-inactive-text;
            border: 1px solid $customers-inactive-text;
            border-radius: 5px;
          }
          .customer__status::first-letter {
            text-transform: uppercase;
          }
        }
      }
      .customer__status {
        text-align: center;
      }
      .content__footer {
        display: flex;
        justify-content: space-between;
        padding: 30px 40px 40px;

        .content__footer-info {
          font-size: 14px;
          color: $customers-light-grey;
        }
        .content__footer-pagination {
          display: flex;
          justify-content: space-between;

          .pagination__arrow,
          .pagination__page {
            padding: 6px 9px;
            background-color: #f5f5f5;
            color: #404b52;
          }
          .pagination__item {
            margin-left: 12px
          }
          .pagination__dots {
            display: flex;
            flex-direction: column;
            justify-content: end;
          }
          .pagination__page.active {
            background-color: #5932EA;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>