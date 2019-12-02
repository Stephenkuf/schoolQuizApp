<template>
  <header class="topbar">
    <div class="topbar-left">
        <span class="topbar-btn sidebar-toggler"><i>&#9776;</i></span>

        <div class="lookup d-none d-md-block topbar-search" id="theadmin-search">
            <input class="form-control w-300px" type="text">
            <div class="lookup-placeholder">
                <i class="ti-search"></i>
                <span><strong>Search</strong></span>
            </div>
        </div>
    </div>

    <div class="topbar-right">
        <ul class="topbar-btns">
            <li class="dropdown">
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#"><i class="ti-user"></i> Profile</a>
                   
                    <a class="dropdown-item" href="#"><i class="ti-settings"></i> Settings</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><i class="ti-power-off"></i> Logout</a>
                </div>
            </li>

            <!-- Notifications -->
                       <!-- END Notifications -->

            <!-- Messages -->
            <li class="dropdown d-none d-md-block">
                <span class="topbar-btn" data-toggle="dropdown"><i class="ti-email"></i></span>
                <div class="dropdown-menu dropdown-menu-right">

                    

                    
                </div>
            </li>
            <!-- END Messages -->
        </ul>
    </div>
</header>

</template>

<script>
export default {

}
</script>

<style>

</style>