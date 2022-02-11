export const sideBar = [
    {
        name: "Bếp",
        group: [
            { item: "Xoong, Nồi, Chảo", link: "xoong-noi" },
            { item: "Giá, Kệ Đa Năng", link: "gia-ke-da-nang" },
            { item: "Phụ Kiện Bếp", link: "phu-kien-bep" },
            { item: "Thìa, Đũa", link: "thia-dua" },          
        ],
        link: "bep"
    },
    {
        name: "Picnic Day",
        group: [],
        link: "picnic-day"
    },
    {
        name: "Cốc, Ly",
        group: [
            {item: "Cốc", link: "coc"},
            {item: "Ly", link: "ly"},
        ],
        link: "coc-ly"
    },
    {
        name: "Trà Chiều",
        group: [
            {item: "Bộ Ấm Trà", link: "bo-am-tra"},
            {item: "Trà Cụ", link: "tra-cu"},
            {item: "Tea Party", link: "tea-party"},
        ],
        link: "tra-chieu"
    },
    {
        name: "Chăm Sóc Chúng Mình",
        group: [
            {item: "Cafe Tỉnh Táo", link: "cafe-tinh-tao"},
            {item: "Thư Giãn", link: "thu-gian"},
        ],
        link: "cham-soc-chung-minh"
    },
    {
        name: "Thiền Định An Yên",
        group: [
            {item: "Trầm", link: "tram"},
            {item: "Set Đốt Trầm", link: "set-dot-tram"},
        ],
        link: "thien-dinh-an-yen"
    },
    {
        name: "Mùi Hương",
        group: [
            {item: "Nến Thơm", link: "nen-thom"},
            {item: "Tinh Dầu, Túi Thơm", link: "tinh-dau-tui-thom"},
        ],
        link: "mui-huong"
    },
    {
        name: "Trang Trí Nhà Cửa",
        group: [
            {item: "Khăn Trải Bàn, Thảm", link: "khan-trai-ban-tham"},
            {item: "Bình Cắm Hoa", link: "binh-cam-hoa"},
        ],
        link: "trang-tri-nha-cua"
    },
    {
        name: "Đồ Cá Nhân",
        group: [],
        link: "do-ca-nhan"
    },
    {
        name: "A Little Garden",
        group: [],
        link: "a-little-garden"
    }
]

export const products = {
    "bep" : [
        "am-picnic",
        "am-trang-men-do-2-4l",
        "am-trang-men-meo-1-1l",
        "am-trang-men-mickey",
        "am-trang-men-xanh-1-1l",
        "bep-nuong-con-tron",
        "bep-nuong-dien-korea",
        "bep-picnic-bag",
        "gia-de-dao", 
        "gia-dia-3-ngan",
        "gia-up-bat-black-and-white",
        "gia-up-bat-night",
        "gio-cookies"
    ],
    "xoong-noi": [
        "am-picnic",
        "am-trang-men-do-2-4l",
        "am-trang-men-meo-1-1l",
        "am-trang-men-mickey",
        "am-trang-men-xanh-1-1l",
        "bep-nuong-con-tron",
        "bep-nuong-dien-korea",
        "bep-picnic-bag"
    ],
    "phu-kien-bep": [
        "gia-de-dao", 
        "gia-dia-3-ngan",
        "gia-up-bat-black-and-white",
        "gia-up-bat-night",
        "gio-cookies"
    ],
    "picnic-day" : [
        "khan-trai-ban-ren-tuyet",
        "tham-picnic-hoa-tiet"
    ],
    "coc-ly" : [
        "coc-linh-lan-hong-350ml"
    ],
    "cham-soc-chung-minh" : [
        "bo-am-anh-dao-men-xanh"
    ],
    "trang-tri-nha-cua" : [
        "binh-hoa-nut-luu-ly"
    ],
    "tra-chieu" : [
        "khay-mut-chup-thuy-tinh-2-ngan",
        "bo-am-sen-tui-vai"
    ]
}

export const productDetail = {
    "am-trang-men-do-2-4l" : {
        name: "Ấm Tráng Men Đỏ 2,4L",
        SKU: "ATMD24",
        price: 760,
        description: "",
        group: "xoong-noi",
        image: [   
            "https://product.hstatic.net/200000015764/product/z2273282269591_4a64b79d8a7fa6b90b6134350900cda5_4b77d6d22ae8448faa2555d31e09cd99_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2273282265941_a12fafffe01d7d8c68dff7197e052564_1e75938dc6984b2db484e5ae990a6463_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2273282266602_14e0bbaf2d4a3b60d28261b3d66ccb10_7b9b63d5faba41f483ad752e2b9877ed_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2273282267594_f87d135eb8575fe34d4c838d950ed3e7_156e5a955fa34f3989f442d8b88185a6_compact.jpg",
        ] // compact -> master
    },
    "am-trang-men-xanh-1-1l": {
        name: "Ấm Tráng Men Xanh (1,1L)",
        SKU: "ATMX12",
        price: 620,
        description: "Pha trà, đun nước, đun sữa, làm bình đựng nước,...Dùng trên bếp từ bếp ga, lò nướng, lò vi sóng, bếp hồng ngoại,...Chất liệu: tráng men",
        group: "xoong-noi",
        image: [
            "https://product.hstatic.net/200000015764/product/z2904524491646_6e8a21189b8f24c3f95ced93a74674cb_132c5aa7578f407c9f8d2314f933753c_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2904524524356_e95ff1acd5fb115d18bfc1ffc6dbdc4c_2278f6ff0c7940c7b6eb7f6479c9e0b8_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2904524499928_6f888c09256984e9f55dc2f2cfe8bb10_8d5209ee25e240e7a3d1cd0d1526bddd_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2904524513678_42f0a554bc9624598db9349f6ee50e40_edb1a206d3ac4e60be405fd0811a626f_compact.jpg",
        ]
    },
    "am-trang-men-meo-1-1l" : {
        name: "Ấm Tráng Men Mèo (1,1L)",
        SKU: "ATMM12",
        price: 680,
        description: "Pha trà, đun nước, đun sữa, làm bình đựng nước,...Dùng trên bếp từ bếp ga, lò nướng, lò vi sóng, bếp hồng ngoại,...Chất liệu: tráng men",
        group: "xoong-noi",
        image: [
            "https://product.hstatic.net/200000015764/product/z2904524481279_261799bd366be8bbb4e24311b410a41a_46ff2bf898ed4e52b9fcec044d5b8139_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2904524447109_0ae2f96e3141c4111793821d97ad8464_93550a35d396462bab56125214354db5_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2904524462294_d169ce2db13fd09d704e151e2b44b5a1_feb590c62ac64581be674cedac4601b6_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2904524510555_25cbd5e5bb8ab1db0a79cb9b0b4cf33b_0b6f7569a8de454391ea1e67be5e10ab_compact.jpg",
        ]
    },
    "am-trang-men-mickey" : {
        name: "Ấm Tráng Men Mickey",
        SKU: "ATMMK11",
        price: 545,
        description: "",
        group: "xoong-noi",
        image: [
            "https://product.hstatic.net/200000015764/product/z2166339032884_44aa9d45ef54f6764b31bd6608341cfa_ee783d4696684e8e8f0d0d513e9030c8_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2166339035249_b9ad1fe2d0601166e921cab8d7e3140b_0777bc8a9b8546fa89dc54b9ce8c130f_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2166339041381_295538bd1746d2855c6f59c351d3dc98_f524047c701649458f2889ea0bc0b755_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2166339044159_026b9835729e2100b48b461fb1da520e_b415408f68ff4e47a3a40055c1fd3b12_compact.jpg",
        ]
    },
    "am-picnic" : {
        name: "Ấm Picnic",
        SKU: "APCN11",
        price: 370,
        description: "",
        group: "xoong-noi",
        image: [
            "https://product.hstatic.net/200000015764/product/z2377963479367_db40ed3f6a2557afc5dbe491c25cbf0b_4c101ddcb3644811834645b3f99bc26a_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2377963455993_5d3e2cf9ee67fbc45b8af351d14085dc_d088f97fdc124971858f7b6a29bdefab_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2377963458935_74bf5103f0e78cd0486e566fe2235ace_5e0aba34b6fe433481a4ee3248cbd03d_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2377963462987_c2db6e7fdf10044a9617ad3c8c70f986_795002935f344fcead42f02f26c0aa7a_compact.jpg",
        ]
    },
    "tham-picnic-hoa-tiet": {
        name: "Thảm Picnic Hoạ Tiết",
        SKU: "PNHT11-1",
        price: 780,
        description: "",
        group: "picnic-day",
        image: [
            "https://product.hstatic.net/200000015764/product/z2413530354533_995132efa8cd3049dd0347b7e3fcb5b1_2d30f173fd3649c99e3733760d55bb43_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2413530324395_cf5a742d453defa80b723f774eb6ed5d_5a43017c7f514061971eb197bee40830_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2413530334140_4001f1a334fb3253dd939d79c386f357_13e16e23ccfb4cbc91203bfb2e683a05_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2413530312960_95810376b6e1d9232de16b9f926b85ad_6fc6864e6546447c830418af291252d5_compact.jpg",
        ]
    },
    "khan-trai-ban-ren-tuyet" : {
        name: "Khăn Trải Bàn Ren Tuyết",
        SKU: "KTRT01",
        price: 195,
        description: "",
        group: "picnic-day",
        image: [
            "https://product.hstatic.net/200000015764/product/104043828_247636563200136_8760368985925987794_n_5f873773c38c486a8735de9bcd4e900b_1024x1024.jpg",
        ]
    },
    "gio-cookies" : {
        name: "Giỏ Cookies",
        SKU: "GCK11",
        price: 265,
        description: "",
        group: "phu-kien-bep",
        image: [
            "https://product.hstatic.net/200000015764/product/e7f7335c-40ce-4b54-a0df-da02c72e7d26_bce7fdf1382b4d8a8c13e874dcd811b0_compact.jpg",
            "https://product.hstatic.net/200000015764/product/9ed9603e-79fe-4722-a37e-9fb1eb028145_ceb996986cdb4709b05297d287e60938_compact.jpg",
            "https://product.hstatic.net/200000015764/product/574f9a05-9e1c-4f92-90d5-279c07d39837_fa948b29e4734917b78674b833b560af_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2408540656000_023a1f4214e903c16516cf1aefc2ae37_b763c10cb56740888275ae2a8bfa83f0_compact.jpg",
        ]
    },
    "gia-dia-3-ngan" : {
        name: "Giá đĩa 3 ngăn",
        SKU: "GSD301",
        price: 295,
        description: "",
        group: "phu-kien-bep",
        image: [
            "https://product.hstatic.net/200000015764/product/4dc04a09-7cde-46d3-9a0b-c8a8e26acc1f_b781689852cf4addaf7e99e278574536_1024x1024.jpg",
        ]
    },
    "gia-de-dao": {
        name: "Giá Để Dao",
        SKU: "GDD01",
        price: 320,
        description: "",
        group: "phu-kien-bep",
        image: [
            "https://product.hstatic.net/200000015764/product/21f9df55-ea31-4406-8edc-90090aa5b88d_c14774304e2a45eb96719aa5ad2cab28_compact.jpg",
            "https://product.hstatic.net/200000015764/product/601ae62f-deff-418c-96c3-1b824f59c91b_857c13a63c6f449390e26ee651b773c5_compact.jpg",
            "https://product.hstatic.net/200000015764/product/2a329c7d-db53-4d49-98aa-d50f3861fc9c_0270c931d5724bcaab7d6d57fccc4ae8_compact.jpg",
            "https://product.hstatic.net/200000015764/product/603b1ebe-d994-49f6-8de4-337e5f6defcf_ae0d795b47014c9ebd8464cfed965b9b_compact.jpg",
        ]
    },
    "gia-up-bat-night": {
        name: "Giá Úp Bát Night",
        SKU: "UBN1-1",
        price: 680,
        description: "- Chất liệu: Sắt sơn tĩnh điện- Kích thước:+ 1 tầng: 44 x 35 x 31 cm (dài x rộng x cao)+ 2 tầng: 44 x 35 x 47 cm (dài x rộng x cao)",
        group: "phu-kien-bep",
        image: [
            "https://product.hstatic.net/200000015764/product/e62aea68-2e36-48c2-aa9e-0746b714ae03_253bc585e87449aab194b1592621a917_compact.jpg",
            "https://product.hstatic.net/200000015764/product/638fbd89-af13-411c-a96a-d6d9b9ff4260_c34dee2f5fd14156aeeb24d20c16aa24_compact.jpg",
            "https://product.hstatic.net/200000015764/product/1cacbd1f-1196-49c7-ac1b-5cf148fdb041_8a3b35c148714acf81020ac050e8d33b_compact.jpg",
            "https://product.hstatic.net/200000015764/product/ed9783db-b700-4d6f-89ab-770716c52a68_e9aee87b1e694e47b7159a7b2545ebb4_compact.jpg"
        ]
    },
    "gia-up-bat-black-and-white":{
        name: "Giá Úp Bát Black and White",
        SKU: "BAW01-1",
        price: 395,
        description: "",
        group: "phu-kien-bep",
        image: [
            "https://product.hstatic.net/200000015764/product/ke_up_bat_1_b49140d2e1f94065b33c0781a47994e6_compact.jpg",
            "https://product.hstatic.net/200000015764/product/ke_up_bat_74f6ffb268b248159ae5b1ed954674de_compact.jpg",
            "https://product.hstatic.net/200000015764/product/ke_up_bat_3_2fbe36b9759b4093a563ef605174cf38_compact.jpg",
            "https://product.hstatic.net/200000015764/product/ke_ups_bat_2_58f9abb8360d4853af814f63b39b774d_compact.jpg",
        ]
    },
    "bep-picnic-bag": {
        name: "Bếp Picnic Bag",
        SKU: "PNB11",
        price: 1370,
        description: "Bếp dễ lắp đặt, dễ sử dụng và dễ vệ sinh.Bếp sử dụng thanĐược làm bằng thép chất lượng và lưới thép mạ crôm, không gỉ, không ăn mòn, bền.Kích thước nhỏ gọn, tiện dụngKích thước: xem hình ảnh để nhìn rõ kích thước",
        group: "xoong-noi",
        image: [
            "https://product.hstatic.net/200000015764/product/z2377963437444_d7b093874708c171d2d2949206292883_860a38c424b14066bc0d3be3c7f9b68c_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2377963383185_c465153c793ff11d202062f2acfea408_bea0e9df2dd24b47aa560ca1b1ef772a_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2377963395548_2792af4c5d20b92dc9319efb29d8f62b_00094922e11848f28228e1b447dbaecc_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2377963417005_afcb05047566c7e0453b10305be05b17_6586e89a80c64f0aa0b1fc1ca0b99e6d_compact.jpg",
        ]
    },
    "bep-nuong-dien-korea": {
        name: "Bếp Nướng Điện Korea",
        SKU: "BND01",
        price: 1120,
        description: "",
        group: "xoong-noi",
        image: [
            "https://product.hstatic.net/200000015764/product/03a61114-7456-410f-82c7-88810b079c94_de7ea290618b4c50a3a36ec492d63d3d_compact.jpg",
            "https://product.hstatic.net/200000015764/product/3039f0c1-f80b-4513-9704-5813f5ef397b_b672bd767134419492510854c506ec59_compact.jpg",
            "https://product.hstatic.net/200000015764/product/a300df81-d39e-4b0d-9ec4-36b3db381ac8_0ed46e9950e74eaead72a1b961e36832_compact.jpg",
            "https://product.hstatic.net/200000015764/product/e35a4929-aa21-498e-b5de-fbba53560e9b_4cf67fee9b10479d904e2eba34cb6b1f_compact.jpg",
        ]
    },
    "bep-nuong-con-tron": {
        name: "Bếp Nướng Cồn Tròn",
        SKU: "BNC01-1",
        price: 345,
        description: "- Chất liệu: Hợp kim nhôm, gỗ sồi- Kích thước: + Nhỏ: 16 x 10 cm (đường kính x chiều cao) + Lớn: 21 x 10 cm (đường kính x chiều cao)",
        group: "xoong-noi",
        image: [
            "https://product.hstatic.net/200000015764/product/4f2b698a-5ec8-4211-8c91-afb759f4b693_60b235786761461d82a6bda05acc625e_compact.jpg",
            "https://product.hstatic.net/200000015764/product/4d3cbeaf-51f6-4311-9a38-2d803f70ef4b_9b426b983dbb4aa2acaae7e66c67375d_compact.jpg",
            "https://product.hstatic.net/200000015764/product/31806b87-d4b7-49bb-b367-3f8e8632261f_a80cd45d8bee4ec086246013cd08a15a_compact.jpg",
            "https://product.hstatic.net/200000015764/product/29ade237-6921-418b-a611-75003a4a2e3d_b8dcd935678f4cb99fc77ebad6de5e34_compact.jpg",
        ]
    },
    "binh-hoa-nut-luu-ly" : {
        name: "Bình Hoa Nứt Lưu Ly",
        SKU: "BHNLL1-1",
        price: 580,
        description: "",
        group: "trang-tri-nha-cua",
        image: [
            "https://product.hstatic.net/200000015764/product/z3118531909620_c905045b2f76ca3619ebe894ffbeac8e_ec8a0a0554e54412acc90cf6e9d3c4c7_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z3118531749594_d37f89f42a30a040cf6c6ca5fdbfd137_3095db7f4fe04ad6b84017e3a25c299e_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z3118531705044_ca0248d65981ed8165e787cbdffbbc72_fc88e60331d945e98ff8b9299754eac9_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z3118531687828_703a9d86763ddb6794eab2a5795cdc87_be7f6c7d93fb4b38ab18338d4a5f95c1_compact.jpg",
        ]
    },
    "bo-am-anh-dao-men-xanh" : {
        name: "Bộ Ấm Anh Đào Men Xanh",
        SKU: "BADMX1-1",
        price: 650,
        description: "",
        group: "cham-soc-chung-minh",
        image: [
            "https://product.hstatic.net/200000015764/product/z2277520805105_eb5bebba8683e30dffbe7cfeac40ae1a_af808968f7654e76a67a22dca6ee3cde_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2277520807822_e06aa55b9a340dec69e906c5bf35ae34_7e66154467bf44999c35b91088c1fbb3_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2277520798317_5dc791c9b9191e2e16ba2e9898901494_c53e3ff66c65474ab4ac682c24bcc671_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2277520803533_aae388be2cd330a74eaf524902211f92_6960c72df96949daa4de4c36ddca05c3_compact.jpg",
        ]
    },
    "bo-am-sen-tui-vai" : {
        name: "Bộ Ấm Sen (Túi Vải)",
        SKU: "BASTV12",
        price: 980,
        description: "",
        group: "tra-chieu",
        image: [
            "https://product.hstatic.net/200000015764/product/z3110249493606_818b78fd7f2816d8ce5d53cf59ccaadf_14796120099943c19079baef49353e85_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z3110249493878_1d8e5a5285968eeec0803f2a46178fe8_91edc4819bcc49f0867bd3beaade4f3f_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z3110249492858_7c5427a7e1446fb59df88c504849dde3_6ba678b8d1bf4d4a85df3144b0ff91cd_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z3110249494441_0b0aec26b61488a35a04f39fc86e044d_429c86af0034474d8e3c1d054091a99b_compact.jpg",
        ]
    },
    "coc-linh-lan-hong-350ml" : {
        name: "Cốc Linh Lan Hồng (350ml)",
        SKU: "CLLH350",
        price: 435,
        description: "",
        group: "coc-ly",
        image: [
            "https://product.hstatic.net/200000015764/product/z3118532020775_5aa1530aecd96a7553a7866f62821f36_7d7be900f65949329417e616a04376f7_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z3118532018524_1306b2c58f608ac339ff29e18a0eb5fb_e54c9c23bc1a49b180541c1d736e7c2e_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z3118531997135_652f82df86de8a974cf75bea8321b9a0_dfe115c95de04391aee17794eebb3fd8_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z3118532002672_e11888201b4a50fb20763c2eeb2406c4_dca8da98bd23449fa1d8b6872cce270d_compact.jpg",
        ]
    },
    "khay-mut-chup-thuy-tinh-2-ngan" : {
        name: "Khay Mứt Chụp Thủy Tinh 2 Ngăn",
        SKU: "CTT2N12",
        price: 450,
        description: "_Chất liệu: gốm sứ, tre, thủy tinh_Kích thước: như hình",
        group: "tra-chieu",
        image: [
            "https://product.hstatic.net/200000015764/product/639dae51-de51-42da-80a9-0cabc12d60a0_4c87eaa0539746828662a0b0cd7dd710_compact.jpg",
            "https://product.hstatic.net/200000015764/product/z2251651119987_c30f6006d495f99f80d22aa4ede88db5_635aa94921364a34ad9e870b70cad433_compact.jpg",
        ]
    }
}

export const blogs = {
    "a-little-leaf-teams" : [
        "radio-chuong-lam-bieng-gieo-trong-hanh-phuc-thich-nhat-hanh",
        "tra-huong-thao",
        "huong-thao-rosemary",
        "lam-gia"
    ],
    "tui-minh-la-ban" : [
        "be-with-you"
    ]
}

export const story = {
    "radio-chuong-lam-bieng-gieo-trong-hanh-phuc-thich-nhat-hanh" : {
        title: "[RADIO] Chương “Làm biếng” | Gieo trồng hạnh phúc - Thích Nhất Hạnh | A Little Leaf",
        author: " Nguyễn Trần Giang",
        date: "07.10.2020",
        image: "https://file.hstatic.net/200000015764/article/lam_bieng_754cb42705574971958dcd0f77b5b8a6_1024x1024.png",
        content: "🌿Để Lá Nhỏ Kể Bạn Nghe...\nCó những ngày không muốn làm chi ngoài LÀM BIẾNG!\nA Little Leaf có một Audio riêng dành cho bạn, hãy nghe khi bạn chuẩn bị đi ngủ hoặc nằm thư giãn, đắp mặt nạ hay lúc ngâm đôi bàn chân đã di chuyển cả ngày dài.\nVà rồi bạn sẽ thấy Làm Biếng đâu có xấu đâu, Làm Biếng một chút để yêu thương bản thân nhiều hơn và chuẩn bị cho một ngày mới đến.\nMình để link YouTube và Soundcloud của “Làm Biếng” ngay dưới đây thôi nha.\nYouTube: https://youtu.be/7iRlaqTni1I\nSoundcloud: https://soundcloud.com/.../radio-chuong-lam-bieng-gieo...\n🌿Chúc mọi người có một tối êm ả, hạnh phúc.\n#alittleleaf #withlovealways #audio #youtube\n"
    },
    "tra-huong-thao" : {
        title: "Trà Hương Thảo",
        author: "Nguyễn Bích Ngọc",
        date: "14.09.2020",
        image : "https://file.hstatic.net/200000015764/article/thiet_ke_khong_ten_e313fc58a425496294a07820883a75db_1024x1024.png",
        content: "MỘT CỐC TRÀ HƯƠNG THẢO HOÀN HẢO\n_Nguyên liệu: 1 thìa canh lá hương thảo tươi (bỏ cành)\n_Cách làm:\nBỏ lá hương thảo vào một cốc trà (vì lá này rất mỏng nên không cần phải cắt nhỏ nữa)\nĐun sôi một cốc nước rồi để nguội bớt tới 85°C\nRót nước lên trà và để ngâm trong lúc đậy nắp khoảng 3 tới 4 phút. Lọc bỏ lá và thưởng thức\nCông thức này từ một người bạn và đồng nghiệp của tôi, Christophe Bernard. Anh là nhà thảo dược học và tác giả sống ở miền Nam nước Pháp, quê hương của loài hương thảo. Cốc trà hương thảo hoàn hảo này chỉ cần thời gian hãm rất ngắn, để mang lại mùi hương nhưng không phải chất tannin và vị đắng của nó. Điều này khiến vị trà nhẹ hơn và dễ uống hơn.\nViệc dùng nước không nóng hơn 85°C cũng rất quan trọng, nếu không bạn sẽ làm mất một phần hương của nó. Để làm điều này dễ dàng bạn có thể dùng tới nhiệt kế đo và một cái đồng hồ để tính xem mất mấy phút thì nước vừa đun sôi sẽ đạt tới nhiệt độ này. Lần sau khi bạn đun nước, bạn có thể đặt giờ để đếm ngược khoản thời gian này.\nTrích: Năng Lượng Sống Từ Thảo Dược - Rosalee De La Forêt\n"
    },
    "huong-thao-rosemary" : {
        title: "Hương Thảo (Rosemary)",
        author: "Nguyễn Bích Ngọc",
        date: "31.08.2020",
        image : "https://file.hstatic.net/200000015764/article/118528241_2800322093546380_5663594150538693104_n_55321a8992514f6fa905820f3eb966df_1024x1024.jpg",
        content: "Hương thảo là loại cây bụi thân thảo, thấp bé, có nguồn gốc từ vùng đất rộng lớn Địa Trung Hải. Tại đâu chúng sinh trưởng trong những điều kiện khó khăn và trên lớp đất đá. Hương thảo thuộc họ bạc hà thơm và hương vị dễ chịu của nó đã khơi cảm hứng cho con người qua nhiều thời đại. Ngoài việc là nguyên liệu nấu ăn phổ biến, loại thảo mộc này còn được dùng làm nước hoa.\nTên tiếng Anh thông dụng của nó, Rosemary, đôi khi được nhắc tới có liên quan đến Đức mẹ Đồng trinh Mary. Truyện kể rằng trong chuyến chạy trốn tới Ai Cập của gia đình bà, một bụi hương thảo đã che chắn và bảo vệ cho họ. Khi Mary đặt chiếc áo choàng của bà bên trên bụi rậm, những bông hoa trắng biến thành màu xanh và vì vậy nó trở thành “rose of Mary” (hoa hồng của Mary)\nĐặc điểm dược tính và năng lượng học của Hương Thảo:\n_Bảo vệ da: Chiết xuất hương thảo cũng được chứng minh là có tác dụng tốt đối với các tổn hại do tia UV.\n_Tốt cho sức khỏe tim mạch: Hương thảo có thể được dùng để tăng tuần hoàn máu và giảm viêm nhiễm trong hệ tim mạch.\n_Giảm đau: Chất chống oxy hóa của hương thảo có thể giảm mất cân bằng oxy hóa và viêm nhiễm.\n_Cho trí nhớ: Trong 1 nghiên cứu ngắn hạn, một liều nhỏ 750mg hương thảo khô đã có tác dụng tốt đáng kể trên chức năng nhận thức ở người già.\n_Cho các vấn đề về tiêu hóa: Hương thảo hãm thành trà có thể giảm nhẹ chứng chậm tiêu gây ra ợ hơi, buồn nôn, đau bụng hay chướng khí.\n_Chữa cảm cúm: Trà hương thảo giúp làm ấm người, có cũng có thể dùng như loại thảo dược hỗ trợ để giúp thông phổi và xoang mũi.\n_Chữ rụng tóc: hỗn hợp 2 thìa café tinh dầu hương thảo, 2 thìa café tinh dầu oải hương, 15ml rượu thuốc cayenne và 473ml dầu vừng giúp cải thiện mọc tóc.\n*Lưu ý:\nTrong lúc đang mang thai và cho con bú nên tránh dùng lượng lớn hương thảo.\nHương thảo có thể làm giảm lượng đường trong máu.\nMột tỉ lệ rất nhỏ người bị dị ứng da khi tiếp xúc với hương thảo.\nNguồn: Năng Lượng Sống Từ Thảo Dược - Rosalee De La Forêt \n"
    },
    "lam-gia" : {
        title: "Lam Già",
        author: "Thiên Vân",
        date: "27.05.2020",
        image:"https://file.hstatic.net/200000015764/article/100597168_252027369351733_8973853815849615360_n_c528dd32159c4cf2b0cc0e9a4b4af6b5_1024x1024.jpg",
        content: "Tụi mình hay gọi chị Lam là 'chị đắp ca' vì dạo trước, cửa hàng thiếu người, ca nào trống Lam sẽ làm đắp vào hoặc thay ca cho mấy đứa bận đột xuất (có cả mình đó 😝)\n\nMấy đứa nhỏ tụi mình dường như không thể 'sống sót' ở cửa hàng nếu không gọi Lam ít nhất một cuộc trong ca, có vấn đề gì khó Lam sẽ hướng dẫn tụi mình từng bước một\nLam bảo tụi mình dựa dẫm vào Lam quá, Lam sẽ nghiêm khắc để tụi mình biết tự chủ hơn nhưng mà mình biết là Lam vẫn chẳng yên tâm đâu - lúc nào, đi đâu cũng túc trực điện thoại xem tụi mình có khó khăn gì không để còn giúp.\n\nLam siêu mê bánh tráng, còn khoe mẽ về siêu năng lực là 'chỉ nhìn thôi sẽ biết bánh tráng ngon hay không' 🤷 ( mọi người đừng thắc mắc vì mình cũng không hiểu đâu ạ).\nVậy nên, mỗi lần mình làm chị Lam giận sẽ canh lúc Lam tập trung làm việc, bảo\n- 'Em đi mua bánh tráng nha, nhanh lắm, chị ăn gì không?'\n- '...'\n-' Mua cho chị bịch bánh tráng tỏi.'\n\nVậy đó, Lam sắp tốt nghiệp rồi, tụi em ổn mà nên Lam ôn tập tốt nha, chúc Lam thi thiệt là tốt!\n"
    },
    "be-with-you" : {
        title: "Be With You",
        author : "Thiên Vân",
        date: "29.05.2020",
        image:"https://file.hstatic.net/200000015764/article/be_with_you_club_72afdc6e7c2a45f192c30b285f8e9851_1024x1024.jpg",
        content: "A Little Leaf Hà Nội có một bạn hàng xóm xinh xắn cạnh nhà là Be With You.\n\nNghe tên thôi đã thấy yêu rồi nhỉ, như một lời hứa sẽ luôn bên cạnh tụi mình vậy.\n\n\n\nBe With You là một nàng công chúa chính hiệu, thích màu hồng và sưu tập toàn những món nhỏ nhắn, xinh xắn nhưng vô cùng hữu ích.\n\nNhà Be cũng rất dễ thương, luôn trả lời tin nhắn của chúng mình nhanh ơi là nhanh mà vẫn đáng yêu quá chừng.\n\n\n\nRảnh rảnh  bạn hãy ghé chơi với Be With You nha, ngôi nhà màu hồng của bạn ấy yêu lắm đó.\n\nÀ còn nữa, bạn có thể kết bạn với Be qua:\n\n- Instagram: https://www.instagram.com/bewithyouclub/\n\n- Facebook:https://www.facebook.com/bewithyouclub/?ref=br_rs\n"
    }
}