<template>
   <div class="grid-container">
       <!--<router-link to="/">Home</router-link> |-->
        <router-link to="/employee">
            <div class="employee">
                <EmployeeBackground class="employee-background"></EmployeeBackground>
                <AvatarBackground class="avatar-background"></AvatarBackground>
                <SanderAvatar class="avatar"></SanderAvatar>
                <div class="text-box">
                    <h4>Erwin Haers</h4>
                    <h4>UX-designer</h4>
                </div>
            </div>
        </router-link>
       <router-link to="/employee">
           <div class="employee">
               <EmployeeBackground class="employee-background"></EmployeeBackground>
               <AvatarBackground class="avatar-background"></AvatarBackground>
               <SanderAvatar class="avatar"></SanderAvatar>
               <div class="text-box">
                   <h4>Erwin Haers</h4>
                   <h4>UX-designer</h4>f
               </div>
           </div>
       </router-link>
       <router-link to="/employee">
           <div class="employee">
               <EmployeeBackground class="employee-background"></EmployeeBackground>
               <AvatarBackground class="avatar-background"></AvatarBackground>
               <SanderAvatar class="avatar"></SanderAvatar>
               <div class="text-box">
                   <h4>Erwin Haers</h4>
                   <h4>UX-designer</h4>
               </div>
           </div>
       </router-link>
       <router-link to="/employee">
           <div class="employee">
               <EmployeeBackground class="employee-background"></EmployeeBackground>
               <AvatarBackground class="avatar-background"></AvatarBackground>
               <SanderAvatar class="avatar"></SanderAvatar>
               <div class="text-box">
                   <h4>Erwin Haers</h4>
                   <h4>UX-designer</h4>
               </div>
           </div>
       </router-link>
       <router-link to="/employee">
           <div class="employee">
               <EmployeeBackground class="employee-background"></EmployeeBackground>
               <AvatarBackground class="avatar-background"></AvatarBackground>
               <SanderAvatar class="avatar"></SanderAvatar>
               <div class="text-box">
                   <h4>Erwin Haers</h4>
                   <h4>UX-designer</h4>
               </div>
           </div>
       </router-link>
       <router-link to="/employee">
           <div class="employee">
               <EmployeeBackground class="employee-background"></EmployeeBackground>
               <AvatarBackground class="avatar-background"></AvatarBackground>
               <SanderAvatar class="avatar"></SanderAvatar>
               <div class="text-box">
                   <h4>Erwin Haers</h4>
                   <h4>UX-designer</h4>
               </div>
           </div>
       </router-link>
   </div>
</template>

<script>
    import AvatarBackground from '../assets/img/avatar-back.svg';
    import SanderAvatar from '../assets/img/sander.svg';
    import EmployeeBackground from '../assets/img/back.svg';

    export default {
        components: {
            AvatarBackground,
            SanderAvatar,
            EmployeeBackground,
        }

    };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
    .grid-container{
        display: grid;
        grid-gap: 1em;
        max-width: 1240px;
        margin: 80px auto;
        grid-auto-rows: 400px;
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
        a{
            height: 400px;
        }
        .employee{
            position: relative;
            svg{
                position: absolute;
                left: 0;
                right: 0;
                margin: 0 auto;
                &.avatar{
                    top: 50px;
                }
                &.avatar-background{
                    top: 68px;
                }
            }
            .text-box{
                text-align: center;
                position: absolute;
                top: 250px;
                left: 0;
                right: 0;
            }
        }
    }

</style>
