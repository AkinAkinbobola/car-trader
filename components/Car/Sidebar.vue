<script setup>
const {makes} = useData();
const route = useRoute();
const router = useRouter();
const city = ref('');
const modal = ref({
  make: false,
  location: false,
  price: false
});

const priceRange = ref({
  min: "",
  max: ""
});

const priceRangeText = computed(() => {
  const min = route.query.min;
  const max = route.query.max;

  if(!min && !max) return 'Any';
  else if (!min && max) {
    return `< $${max}`
  }
  else if (min && !max) {
    return `> $${min}`
  }
  else {
    return `$${min}-$${max}`
  }
})
const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
}

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'City cannot be a number'
    })
  }
  updateModal('location');
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = '';
}

const onChangeMake = (make) => {
  updateModal('make');
  navigateTo(`/city/${route.params.city}/car/${make}`);
}

const onChangePrice = () => {
  updateModal('price');
  if(priceRange.value.min && priceRange.value.max){
    if(priceRange.value.min > priceRange.value.max){
      return;
    }
  }
  router.push({
    query: {
      min: priceRange.value.min,
      max: priceRange.value.max
    }
  })
}
</script>

<template>
  <div class="shadow border w-[40%] mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('location')">{{ route.params.city }}</h3>
      <div class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white" v-if="modal.location">
        <input type="text" class="border p-1 rounded" v-model="city"/>
        <button class="bg-blue-400 w-full mt-2 rounded text-white p-1" @click="onChangeLocation">
          Apply
        </button>
      </div>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('make')">
        {{ route.params.make ? route.params.make : 'Any' }}
      </h3>
      <div
          v-if="modal.make"
          class="absolute border shadow left-56 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white">
        <h4 v-for="make in makes" :key="make.id" class="w-1/3" @click="onChangeMake(make)">
          {{ make }}
        </h4>
      </div>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('price')">{{ priceRangeText}}</h3>
      <div class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white" v-if="modal.price">
        <input type="number" class="border p-1 rounded" placeholder="Min" v-model="priceRange.min"/>
        <input type="number" class="border p-1 rounded" placeholder="Max" v-model="priceRange.max"/>
        <button class="bg-blue-400 w-full mt-2 rounded text-white p-1" @click="onChangePrice">Apply</button>
      </div>
    </div>
  </div>
</template>