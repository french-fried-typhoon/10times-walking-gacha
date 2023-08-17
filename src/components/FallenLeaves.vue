<template>
  <div class="FallenLeaves">
    <div class="leaf" v-for="i in 9" :key="i" />
  </div> 
</template>

<style scoped lang="postcss">
.FallenLeaves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.leaf {
  position: absolute;
  list-style: none;
  top: -50px;
  background: #047a22;
  border-radius: 0% 70%;
}

@keyframes fall {
  to {
    top: 120%;
  }
}

@keyframes sway1 {
  from {
    transform: translateX(0px) rotate(0deg);
  }
  to {
    transform: translateX(200px) rotate(-45deg);
  }
}

@keyframes sway2 {
  from {
    transform: translateX(200px) rotate(-45deg);
  }
  to {
    transform: translateX(0px) rotate(0deg);
  }
}

.leaf:nth-child(1){
  left: 0%;
  top: -60px;
  width: 20px;
  height: 12px;
  background-color: #208038;
  animation: fall 10s linear infinite,
             sway1 3s ease-in-out infinite alternate;
  animation-delay: 2s;
}

.leaf:nth-child(2){
  left: 10%;
  top: -70px;
  width: 13px;
  height: 9px;
  background-color: #009926;
  animation: fall 15s linear infinite,
             sway1 2s ease-in-out infinite alternate;
  animation-delay: 8s;
}

.leaf:nth-child(3){
  left: 20%;
  top: -50px;
  width: 16px;
  height: 10px;
  background-color: #c2704e;
  animation: fall 9s linear infinite,
             sway1 3.5s ease-in-out infinite alternate;
  animation-delay: 13s;
}

.leaf:nth-child(4){
  left: 25%;
  top: -70px;
  width: 16px;
  height: 10px;
  background-color: #185828;
  animation: fall 8s linear infinite,
             sway2 4s ease-in-out infinite alternate;
  animation-delay: 7s;
}
.leaf:nth-child(5){
  left: 30%;
  top: -60px;
  width: 16px;
  height: 10px;
  animation: fall 10s linear infinite,
             sway1 4s ease-in-out infinite alternate;
  animation-delay: 0s;
}
.leaf:nth-child(6){
  left: 70%;
  top: -50px;
  width: 16px;
  height: 8px;
  background-color: #009926;
  animation: fall 11s linear infinite,
             sway2 3s ease-in-out infinite alternate;
  animation-delay: 3s;
}
.leaf:nth-child(7){
  left: 75%;
  top: -40px;
  width: 16px;
  height: 10px;
  animation: fall 7s linear infinite,
             sway2 3.5s ease-in-out infinite alternate;
  animation-delay: 7s;
}
.leaf:nth-child(8){
  left: 80%;
  top: -60px;
  width: 13px;
  height: 9px;
  background-color: #c2704e;
  animation: fall 7s linear infinite,
             sway1 3s ease-in-out infinite alternate;
  animation-delay: 3s;
}
.leaf:nth-child(9){
  left: 85%;
  top: -70px;
  width: 16px;
  height: 10px;
  animation: fall 10s linear infinite,
             sway2 4s ease-in-out infinite alternate;
  animation-delay: 4s;
}
</style>
