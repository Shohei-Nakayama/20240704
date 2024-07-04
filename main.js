var app = new Vue({
                        el:'#app',
                        data:{
                                price:100
                        },
                        computed:{
                            taxIncluded:function(){
                            return this.price * 1.08;
                            }
                        }

                    })