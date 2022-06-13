<template>
    <v-dialog
        v-model="dialog"
        width="500"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                height="30px"
                width="30px"
            >
                <v-icon> {{ 
                            (() => {
                                if(role === 'read'){
                                    return 'mdi-magnify';
                                }
                                else if( role === 'edit'){
                                    return 'mdi-pencil';
                                }
                                else{
                                    return 'mdi-delete';
                                }
                            })()
                        }} 
                </v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
            Privacy Policy
            </v-card-title>

            <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="dialog = false"
            >
                I accept
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props : ["role"],
        
        data() {
            return {
                dialog: false,
            }
        },
    }

    
</script>

<style scoped>

</style>