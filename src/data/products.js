const prodcuts = [
    
    {
        id:1,

        name: 'jugostin', 
        
        description: 'Auxiliar en problemas de circulacion',
        
        ingredients: ['mangostán', 'guayaba', 'manzan', 'uva', 'mora azul', 'arandano'],
        
        caracteristics: ['j05', 'jugo', '1L'],

        image: 'https://mhvida.com/wp-content/uploads/2018/12/Juxtin-New-282x300.png'
    
    },

    {
        id: 2,

        name: 'mh a-ssai', 
        
        description: 'Ayuda a eliminar los radicales libres y reducir el envejecimiento celular',
        
        ingredients: ['acaí', 'árandano','vitamina c', 'tamarindo'],
        
        caracteristics: ['x04', 'suspensión oral', '1L', 'suplemento alimenticio'],

        image: 'https://mhvida.com/wp-content/uploads/2019/01/MH_NONI-282x300.png'
    
    },

    {
        id: 3,

        name: 'mh alfa', 
        
        description: 'Ayuda a disminuir las concentraciones circulantes de lipoproteinas de baja densidad, colesterol y trigliceridos',
        
        ingredients: ['acaí', 'árandano','vitamina c', 'tamarindo'],
        
        caracteristics: ['x04', 'suspensión oral', '1L', 'suplemento alimenticio'],

        image: 'https://mhvida.com/wp-content/uploads/2018/10/Mh_alfa.png'
    
    },

    {
        id: 4,

        name: 'mf caf americano',
        
        description: 'Auxiliar en el proceso de eliminacion de radicales libres gracias a su aporte de antioxidantes',
        
        ingredients: ['cafe soluble', 'shtake', 'naranjo amargo', 'té verde'],
        
        caracteristics: ['ma4', 'polvo para preparar bebida', '400 G'],

        image: 'https://mhvida.com/wp-content/uploads/2018/10/MH_CAF-AMERICANO.png'
    
    },

    {
        id: 5,

        name: 'mh cl pro',
        
        description: 'Auxiliar para reducir la grasa abdominal mediante la sintesis lipidica',
        
        ingredients: ['aceite de chia','àcido linoleico conjugado', 'aceite de coco'],
        
        caracteristics: ['mcl','càpsulas','90 caps', 'suplemento alimenticio'],

        image: ''
    
    },

    {
        id: 6,

        name: 'mh endul-c',
        
        description: 'Sustituto del azuca. Es un endulzane natural bajo en calorias',
        
        ingredients: ['extracto de hojas de estevia (Stevia Rebaudiana)'],
        
        caracteristics: ['e05','solucion','30 ML','suplemento alimenticio'],

        image: 'https://mhvida.com/wp-content/uploads/2018/10/MH_ENDUL-C.png'
    
    },

    {
        id: 7,

        name: 'mh sf chocolate',
        
        description: 'Proporciona nutrientes necesarios con un efecto saciante',
        
        ingredients: ['minerales', 'vitaminas'],
        
        caracteristics: ['s15','polvo para preparar bebida','500 g', 'suplemento alimenticio'],

        image: ''
    
    },

    {
        id: 8,

        name: 'mh sf fresa',
        
        description: 'complemento alimenticio que ayuda a mantener el peso.',
        
        ingredients: ['vitaminas','minerales'],
        
        caracteristics: ['s14','polvo para preparar bebida','500 g'],

        image: ''
    
    },

    {
        id: 9,

        name: 'mh coulagem',

        description: 'Ayuda a reforzar las fibras de colágeno favoreciendo la firmeza y la elasticidad de la piel',

        ingredients: ['colageno','vitamina c'],

        caracteristics: ['m34','polvo para preparar bebida','225 g', 'suplemento alimenticio'],

        image: ''
    
    },

    {
        id: 10,

        name: 'mh engy',

        description: 'Proporciona energia instantánea para realizar las actividades con una fuerza renovadora',

        ingredients: ['vitaminas b2, b3, b5, b6, b12, c', 'creaina', 'd-ribosa', 'taurina'],

        caracteristics: ['e17', 'polvo para preparar bebida','adicionada con cafeina', '20 sobres'],

        image: 'https://mhvida.com/wp-content/uploads/2018/10/MH_ENGY.png'
    
    },

    {
        id: 11,

        name: 'mh ma-k',

        description: 'Fuente natural de energia. Favorece la libido, desempeño fisico; y en ujeres, regulador hormonal durante la menopausia.',

        ingredients: ['maca','semilla de guaraná','l-arginina'],

        caracteristics: ['mak', 'cápsulas','60 caps', 'suplemento alimenticio'],

        image: 'https://mhvida.com/wp-content/uploads/2018/10/MH_MA-K.png'
    
    },

    {
        id: 12,

        name: 'mh pro',

        description: 'Ayuda a contribuir al balance óptimo de los requerimentos nutrimentales diariosa traves de la proteina.',

        ingredients: ['proteina aislada de soya','concentrado de proteina de suero de leche'],

        caracteristics: ['pro+s','polvo','8280 g', 'suplemento alimenticio'],

        image: ''
    
    },

    {
        id: 13,

        name: 'mh ki-dis',

        description: 'Multinutriente especialmente para niños, ayuda al desarrollo mental, fisico, la concentracion y estimular el apetito.',

        ingredients: ['jalea real', 'vitaminas', 'minerales'],

        caracteristics: ['k04','jarabel','500 ml', 'suplemento alimenticio'],

        image: 'https://mhvida.com/wp-content/uploads/2018/10/MH_KI-DIS.png'
    
    },

    {
        id: 14,

        name: 'mh of3',

        description: 'Ayuda a mejorar la concentracion y el aprendisaje.',

        ingredients: ['fosfatidilserina','aceite de salmón (omega 3)'],

        caracteristics: ['mf3','jarabe','250 ml', 'suplemento alimenticio'],

        image: ''
    
    },

    {
        id: 15,

        name: 'mh s+ infantil',

        description: 'Ayuda a fortalecer las defensas del organismo y prevenir infecciones.',

        ingredients: ['l-glutamina', 'l-arginina','con vitaminas y manesio'],

        caracteristics: ['s13', 'jarabe','250 ml', 'suplemento alimenticio'],

        image: ''
    
    },

    {
        id: 16,

        name: 'mh trans infantil',

        description: 'Ayuda a fortalecer las defensas del cuerpo.',

        ingredients: ['calostro','vitaminas','minerales'],

        caracteristics: ['t03','jarabe','250 ml','suplemento alimenticio'],

        image: 'https://mhvida.com/wp-content/uploads/2018/10/MH_Trans.png'
    
    },
    {
        id: 17,

        name: 'mh afa-leven',

        description: 'El alga afa posee altas concentracopmesde minerales, caroteniodes yvariedad de aminoacidos.',

        ingredients: ['alga afa', 'inulina de agave', 'vitaminca c'],

        image: '',
        
        caracteristics: ['laf', 'capsulas', '6 caps', 'vitamina c']

    },

    {

        id: 18,

        name: 'mh carty',

        description: 'auxiliar antiinflamatorio a base de cartilago puro de tiburon.',

        ingredients: ['extracto de cartilago de tiburon'],

        image: 'https://mhvida.com/wp-content/uploads/2018/10/MH_CARTY.png',

        caracteristics: ['c04', 'capsulas', '60 caps', 'suplemento alimenticio']

    },

    {

        id: 19,

        name: 'mh ci-ter',

        description: 'auxiliar para mejorar la circualacion, ademas ayuda a mantener los vasos sanguineos flexibles y tonificados.',

        ingredients: ['aminoacidos'],

        image: 'https://mhvida.com/wp-content/uploads/2018/10/MH_CI-TER.png',

        caracteristics: ['mc-1','tabletas masticables', '60 tabs','suplemento alimenticio']

    },

    {

        id: 20,

        name: 'mh en-g',

        description: 'ayuda en la reparacion de tejidos y fortalece el sistema inmunologico',

        ingredients: ['vitaminas','minerales','aminoacidos', 'proteinas'],

        image: 'https://mhvida.com/wp-content/uploads/2019/05/Unknown-copia-223x300.png',

        caracteristics: ['e21', 'polvo para preparar bebida', '500 g', 'suplemento alienticio']

    },

    {

        id: 21,

        name: 'MH ERGO U',

        description: 'Favorece en el rendimiento físico y ayuda al equilibrio del organismo, lo que se traduce en una mejoría en el estado de salud.',

        ingredients: ['Minerales', 'Ubiquinol', 'Vitaminas'],

        image: 'https://mhvida.com/wp-content/uploads/2018/10/MH_ERGO-U.png',

        caracteristics: ['e18', 'capsulas', '30 caps', 'suplemento alimenticio']

    },

    {

        id: 22,

        name: 'mh enzi',

        description: 'ayuda a promover una correcta digestion a personas que padecen de indigestion',

        ingredients: ['smilsds y elulosa', 'papaina', 'betaina y proteasa'],

        image: '',

        caracteristics: ['e16', 'tabletas', '60 tabs','suplemento alimenticio']

    },

    {

        id: 23,

        name: 'MH FRESH',

        description: ' ayuda a la cicatrización de la mucosa que recubre todo el tubo digestivo por lo que es útil en casos de gastritis, enteritis y colitis aguda crónica.',

        ingredients: ['Clorofila','Hierbabuena', 'Menta'],

        image: '',

        caracteristics: ['clorofila', 'menta', 'hierbabuena']

    },

    {

        id: 24,

        name: 'mh imun',

        description: 'ayuda en el buen funcionamiento del sistema inmunologico',

        ingredients: ['polvo de proteina aislada de suerocon minerales y creatina'],

        image: '',

        caracteristics: ['in2', 'polvo para preparar bebida', '30 sobres', 'suplemento alimenticio']

    }

    // {

    //     id: 25,

    //     name: 'mh kri-l',

    //     description: 'ayuda a mejorar y mantener la salud cardiovascular y el buen funcionamiento de las celulas cerebrales',

    //     ingredients: ['aceite de krill'],

    //     image: '',

    //     caracteristics: ['mhk', 'capsulas', '30 caps', 'suplemento alimenticio']

    // }


];

export default prodcuts;