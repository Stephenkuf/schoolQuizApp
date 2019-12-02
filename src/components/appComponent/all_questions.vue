    <!-- Global quickview -->
    <div id="qv-global" class="quickview" data-url="assets/data/quickview-global.html">
        <div class="spinner-linear">
            <div class="line"></div>
        </div>
    </div>
    <!-- END Global quickview -->
<template>
    <div class="main">
            <main>
        <div class="main-content" >
            <header class="header ">
                <div class="header-bar">
                    <h4> 
                        <a href="question-group2.php"><span class="fa btn fa-angle-double-left"></span></a>
                     View Questions</h4>                
                <span class="badge badge-lg badge-primary">SS3</span>
                <span class="badge badge-lg badge-primary">2nd Term</span>
                
                </div>  
            </header>
            <div class="float-right">
                <button class="btn btn-primary " data-toggle="modal" data-target="#add-modal">Add Question </button>               
            </div><br>
            <hr>

            <div class="row">

                <div class="col-12 card">
                    <table class="table table-responsive table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            <th>Option A</th>
                            <th>Option B</th>
                            <th>Option C</th>
                            <th>Option D</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>How long does it take the river nile to travel to MAdagascar if it decides to go by air</td>
                                <td>16years</td>
                                <td>3 days</td>
                                <td>16years</td> 
                                <td>12years</td>                                 
                                <td>
                                    <div class="flexbox flex-justified fs-10">
                                        <button class="btn btn-success" data-toggle="modal" data-target="#edit-modal" data-provide="tooltip" data-original-title="Edit">Edit</button>
                                        <button class="btn btn-danger" href="#" data-provide="tooltip" data-original-title="Delete">Delete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>How long does it take the river nile to travel to MAdagascar if it decides to go by air</td>
                                <td>16years</td>
                                <td>3 days</td>
                                <td>16years</td> 
                                <td>12years</td>                                 
                                <td>
                                    <div class="flexbox flex-justified fs-10">
                                        <button class="btn btn-success" data-toggle="modal" data-target="#edit-modal" data-provide="tooltip" data-original-title="Edit">Edit</button>
                                        <button class="btn btn-danger" href="#" data-provide="tooltip" data-original-title="Delete">Delete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>How long does it take the river nile to travel to MAdagascar if it decides to go by air</td>
                                <td>16years</td>
                                <td>3 days</td>
                                <td>16years</td>   
                                <td>12years</td>                               
                                <td>
                                    <div class="flexbox flex-justified fs-10">
                                        <button class="btn btn-success" data-toggle="modal" data-target="#edit-modal" data-provide="tooltip" data-original-title="Edit">Edit</button>
                                        <button class="btn btn-danger" href="#" data-provide="tooltip" data-original-title="Delete">Delete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>How long does it take the river nile to travel to MAdagascar if it decides to go by air</td>
                                <td>16years</td>
                                <td>3 days</td>
                                <td>16years</td> 
                                <td>12years</td>                                 
                                <td>
                                    <div class="flexbox flex-justified fs-10">
                                        <button class="btn btn-success" data-toggle="modal" data-target="#edit-modal" data-provide="tooltip" data-original-title="Edit">Edit</button>
                                        <button class="btn btn-danger" href="#" data-provide="tooltip" data-original-title="Delete">Delete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>How long does it take the river nile to travel to MAdagascar if it decides to go by air</td>
                                <td>16years</td>
                                <td>3 days</td>
                                <td>16years</td>  
                                <td>12years</td>                               
                                <td>
                                    <div class="flexbox flex-justified fs-10">
                                        <button class="btn btn-success" data-toggle="modal" data-target="#edit-modal" data-provide="tooltip" data-original-title="Edit">Edit</button>
                                        <button class="btn btn-danger" href="#" data-provide="tooltip" data-original-title="Delete">Delete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>How long does it take the river nile to travel to MAdagascar if it decides to go by air</td>
                                <td>16years</td>
                                <td>3 days</td>
                                <td>16years</td> 
                                <td>12years</td>                                 
                                <td>
                                    <div class="flexbox flex-justified fs-10">
                                        <button class="btn btn-success" data-toggle="modal" data-target="#edit-modal" data-provide="tooltip" data-original-title="Edit">Edit</button>
                                        <button class="btn btn-danger" href="#" data-provide="tooltip" data-original-title="Delete">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        <!--/.main-content -->

    </main>
    <!-- END Main container -->
    
        <!-- Modal -->
        <div class="modal fade" id="add-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Committee</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="card-body">
                        <div class="row">
                            <div class="form-group col-lg-12">
                            <label class="text-uppercase text-fader fw-500 fs-11">Committee Name</label>
                            <input class="form-control" type="text" value="Association of Junior Lawyers">
                            </div>
                            <div class="form-group col-12">
                                <label class="text-uppercase text-fader fw-500 fs-11">Committee Head</label>
                                <div class="btn-group bootstrap-select form-control">
                                    <div class="dropdown-menu open" role="combobox">
                                        <div class="dropdown-menu inner" role="listbox" aria-expanded="false"><a class="dropdown-item"       data-original-index="0"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Below $1,000</span><span class=" ti-check check-mark"></span></span></a><a class="dropdown-item" data-original-index="1"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">$1,000 - $3,000</span><span class=" ti-check check-mark"></span></span></a><a class="dropdown-item selected" data-original-index="2"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">$3,000 - $10,000</span><span class=" ti-check check-mark"></span></span></a><a class="dropdown-item" data-original-index="3"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Over $10,000</span><span class=" ti-check check-mark"></span></span></a>
                                        </div>
                                    </div>
                                    <select class="form-control" data-provide="selectpicker" tabindex="-98">
                                        <option>Ibrahim Musa</option>
                                        <option>Okoye Chidi Mark</option>
                                        <option selected="">Tomiwa Adekunle</option>
                                        <option>John Okonkwo</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="text-uppercase text-fader fw-500 fs-11">Description</label>
                            <textarea class="form-control" rows="4"></textarea>
                        </div>
                    </div>
                </form> 
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal">Add</button>
            </div>
            </div>
        </div>
        </div>
        <!--Add Modal Ends Here -->

        <!-- Modal -->
        <div class="modal fade" id="edit-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update Committee</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="card-body">
                            <div class="row">
                                <div class="form-group col-lg-12">
                                <label class="text-uppercase text-fader fw-500 fs-11">Committee Name</label>
                                <input class="form-control" type="text" value="Association of Junior Lawyers">
                                </div>
                                <div class="form-group col-12">
                                    <label class="text-uppercase text-fader fw-500 fs-11">Committee Head</label>
                                    <div class="btn-group bootstrap-select form-control">
                                        <div class="dropdown-menu open" role="combobox">
                                            <div class="dropdown-menu inner" role="listbox" aria-expanded="false"><a class="dropdown-item"       data-original-index="0"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Below $1,000</span><span class=" ti-check check-mark"></span></span></a><a class="dropdown-item" data-original-index="1"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">$1,000 - $3,000</span><span class=" ti-check check-mark"></span></span></a><a class="dropdown-item selected" data-original-index="2"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">$3,000 - $10,000</span><span class=" ti-check check-mark"></span></span></a><a class="dropdown-item" data-original-index="3"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Over $10,000</span><span class=" ti-check check-mark"></span></span></a>
                                            </div>
                                        </div>
                                        <select class="form-control" data-provide="selectpicker" tabindex="-98">
                                            <option>Ibrahim Musa</option>
                                            <option>Okoye Chidi Mark</option>
                                            <option selected="">Tomiwa Adekunle</option>
                                            <option>John Okonkwo</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="text-uppercase text-fader fw-500 fs-11">Description</label>
                                <textarea class="form-control" rows="4"></textarea>
                            </div>
                        </div>
                    </form> 
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-dismiss="modal">Update</button>
                </div>
                </div>
            </div>
        </div>
        <!--Edit Modal Ends Here -->



    </div>
</template>
<script>
    export default {
        
}
</script>

<style  scoped>

</style>