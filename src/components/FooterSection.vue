<script setup>
import AppLayout from '@/layout/AppLayout.vue';
import facebook from '@/components/SVG/facebook.vue';
import pinterest from '@/components/SVG/pinterest.vue';
import InstagramSolid from '@/components/SVG/instagramSolid.vue';
import twitter from '@/components/SVG/twitter.vue'
 </script>
 <template>
    <div class="bg-secondary text-white py-6">
        <AppLayout>
            <div class="flex flex-col gap-6">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h2 class="uppercase text-lg font-bold mb-2">address</h2>
                        <p class="text-sm capitalize">123 street name , city , england <br/> printrest street oklar</p>
                    </div>
                    <div>
                        <h2 class="uppercase text-lg font-bold mb-2">phone</h2>
                        <p class="text-sm capitalize">tall free (123) 456-7890</p>
                    </div>
                    <div>
                        <h2 class="uppercase text-lg font-bold mb-2">email</h2>
                        <p class="text-sm capitalize">mail@example</p>
                    </div>
                    <div>
                        <h2 class="uppercase text-lg font-bold mb-2">working days/hours</h2>
                        <p class="text-sm capitalize">mon - sun / 9:00 AM - 8:00</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h2 class="capitalize text-lg font-bold mb-2">informaion</h2>
                        <ul class="text-sm capitalize">
                            <li>about us</li>
                            <li>contact us</li>
                            <li>FAQs</li>
                            <li>privacy policy</li>
                            <li>terms & conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="capitalize text-lg font-bold mb-2">services</h2>
                        <ul class="text-sm capitalize">
                            <li>FAQs</li>
                            <li>order and returns</li>
                            <li>shipping policies</li>
                            <li>interional shipping</li>
                            <li>terms & conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="capitalize text-lg font-bold mb-2">your account</h2>
                        <ul class="text-sm capitalize">
                            <li>cart</li>
                            <li>checkout</li>
                            <li>my account</li>
                            <li>contact</li>
                            <li>privacy policy</li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div>
                            <h2 class="capitalize text-lg font-bold mb-2">contact us</h2>
                            <p class="text-sm capitalize">
                                60, 29th street, san francisco, CA <br/> 94110, united states of america
                            </p>
                        </div>
                        <div>
                            <h2 class="capitalize text-lg font-bold mb-2">get support</h2>
                            <p class="text-sm capitalize underline">
                               chat now 
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between max-sm:flex-col max-sm:items-center">
                    <div class="inline-flex gap-2 capitalize">
                        <a href="#">home</a>
                        <a href="#">features</a>
                        <a href="#">categories</a>
                        <a href="#">about</a>
                        <a href="#">shop</a>
                        <a href="#">contact</a>
                    </div>
                    <div class="flex gap-3">
                        <facebook fill="#ff0000" class="w-6"/>
                        <pinterest fill="#ff0000" class="w-5"/>
                        <InstagramSolid fill="#ff0000" class="w-5"/>
                        <twitter fill="#ff0000" class="w-5"/>
                    </div>
                </div>
                <div class="flex justify-between max-sm:flex-col max-sm:items-center gap-1 capitalize">
                    <div class="flex gap-2">
                        <a href="#">specials |</a>
                        <a href="#">affiliates |</a>
                        <a href="#">specials |</a>
                        <a href="#">discount |</a>
                        <a href="#">brands |</a>
                    </div>
                    <div>
                        copyright &copy; 2021 bango
                    </div>

                </div>
            </div>
        </AppLayout>
    </div>
 </template>