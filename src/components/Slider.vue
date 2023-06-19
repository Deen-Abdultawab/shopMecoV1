<template>
  <div class="img-container" ref="slides">
    <div
      class="brand-image"
      v-for="brand in brands"
      :class="{ active: brand.active }"
    >
      <img :src="require(`@/assets/images/${brand.image}`)" alt="brand.name" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';

export default {
  setup() {
    const brands = [
      {
        image: "honda-automobiels-1.png",
        name: "Honda",
      },
      {
        image: "Kia.png",
        name: "Kia",
      },
      {
        image: "Toyota.png",
        name: "Toyota",
        active: true,
      },
      {
        image: "Vector.png",
        name: "Lexus",
      },
      {
        image: "Mecedes-benz.png",
        name: "Mecerdez",
      },      
    ];

    const slides = ref(null)
    const interval = ref(null)

    onMounted(()=>{
      const list = [...slides.value.children]
      const activeslides = list.find((item)=>item.classList.contains('active'))
      let scrollPosition = 0
      const scrollSpeed = 2
      
      interval.value = setInterval(() => {
        scrollPosition += scrollSpeed;

        if(scrollPosition >= slides.value.scrollWidth - slides.value.clientWidth){
          scrollPosition = 0
        }
        slides.value.scrollLeft = scrollPosition
      }, 10)

      console.log('mounted')
    })

    onUnmounted(()=>{
      console.log('unmounted')
      clearInterval(interval.value)
    })

    return { brands, slides };
  },
};
</script>

<style scoped>
.img-container {
  display: none;
}

@media only screen and (max-width: 900px) {
  .img-container {
    display: flex;
    width: 90vw;
    height: 200px;
    margin: 0 auto;
    /* border: 1px solid red; */
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    gap: 1rem;
    overflow-x: auto;
  }

  .brand-image {
    /* border: 1px solid blue; */
    flex: 1 0 50%;
    height: 100%;
    display: grid;
    place-items: center;
    background: #FFB74C;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .brand-image.active {
    flex: 1 0 70%;
  }

  .brand-image img {
    filter: grayscale(100%) ;
  }

  .img-container::-webkit-scrollbar {
    display: none;
  }
}
</style>
