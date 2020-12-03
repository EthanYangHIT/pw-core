import test from 'ava';
import { Amount, AmountUnit } from '../..';

test('toHexString', (c) => {
  const t = (expected, n) => {
    c.is(expected, new Amount(n, AmountUnit.shannon).toHexString());
  };
  t('0x0', '0');
  t('0x9', '9');
  t('0x5a', '90');
  t('0x0', '0');
  t('0xffffffff', '4294967295');
  t('0x0', '0');
  t('0x60bf8d3f1cb70827109c', '456880688358819786854556');
  t('0x27', '39');
  t('0x14a3b3', '1352627');
  t(
    '0xc8841d8a3e0c3184a1d13f24b7c8abcbf36',
    '1091713357762058306584556087055815769112374'
  );
  t('0x2266ce3388fee3c292256', '2599310186932964178862678');
  t(
    '0x784afb326df4e14f44919e903da2daab2c6a8c2b7',
    '10988016479801545098971638340838655979698598232759'
  );
  t('0x47d', '1149');
  t('0x613b8b5', '101955765');
  t('0x6b63', '27491');
  t(
    '0x2d3777760a984a21c97a0d20c628c419cab2bfc67f',
    '66084232243819558824679961490043082487366953191039'
  );
  t('0x12c9942167ae93c737fc5ff39d', '1488492491002839592133151683485');
  t('0xc2c44', '797764');
  t(
    '0xfe787f84cf0ae7655d44db4e793b2a98ae8f',
    '22167524012235587957931446373184044722073231'
  );
  t(
    '0x186b6b31486165c0bc8c778fd49af12ea08f7dad332',
    '571028668500605890623232664155788301681845784466226'
  );

  t('0x2aef3ee6f864b26772c23cf6', '13287600730756091106849602806');
  t(
    '0x193c4c1a69add29d9a5101ced0568697d923',
    '2198325248780085112365807036920470754023715'
  );
  t('0x11a507516c68d662f15d9', '1333191524844399246644697');
  t('0xa2669c148f4ea9e', '731388268367899294');
  t('0xed2a498f218583395d57871', '4587441849070983049702111345');
  t('0x1fbbac5129573', '558254565528947');
  t(
    '0x1b91780b06a70cf46e5fa0fa8e63407e80030f027a',
    '40291024919626546988689644749021723762456102109818'
  );
  t('0x25a90a2b75d596836e10d26ec831', '763841862190387816235893777156145');
  t('0xfbd45cc9e2', '1081599642082');
  t('0x621e835f12ad64e909cf7', '7413676543182627283180791');
  t('0x17de6483675cb29063c', '7044803064789933295164');
  t('0x2ecc612', '49071634');
  t(
    '0x14bb4a5d83f3d4bf43b66adada6b0e993784',
    '1805977369681030296729705669300424034301828'
  );
  t('0x8b63e2dca39c336b18', '2571294983995377543960');
  t('0x3c1440de515e09b31f73cdd0da6e2', '19496787444412678571409607909811938');
  t('0xd39570c80caa28598ea432085259', '4291428326751199011126676862554713');
  t(
    '0x1d54a95161a44ae4d216da350d20954f13992a85',
    '167448744619550277927636746527062265701749828229'
  );
  t(
    '0xe3ffcc64277a78a8256d7e1d7c05eaa9bf',
    '77584111689906087598180624752236124875199'
  );
  t('0x22f4736', '36652854');
  t('0x2c35e4d05c0', '3038123984320');
  t('0x430e68bd9ad4952', '301994663360678226');
  t('0x1d854cf1f48c4529d864b686f2d', '37421939842938093643010520149805');
  t('0x5db3324efd09a682cd', '1728459668785308533453');
  t('0x1b60d2a23a53bc5a', '1972808230993378394');
  t(
    '0x1b7b2cc91769682ad42af60ef67c77c99ac81d227197',
    '10281919698706053870205728976619722313496732052386199'
  );
  t(
    '0x78a9c9d91cb45ec86599f1b402f6635265b69a0317',
    '176349517282896190364726424897935661923732528169751'
  );
  t(
    '0x310f7e944db1e20ca7d4db559be74aafcd',
    '16694431636419175813863637436681440374733'
  );
  t(
    '0x11a4ae80f151dad1752e32c310a41dae552c37b7b4',
    '25785693883194456949802584063055012266517133244340'
  );
  t(
    '0x320abd803f00618b853f0f4ad06d76e5ead8eb20d',
    '4571024861681675091071130733403917525672421929485'
  );
  t('0x17f27d4daa32a', '421284028261162');
  t('0x3fd14203387143ed10002039a6fed', '20709934734392064809458286974365677');
  t('0xddf93c33cbe97520fb19a19', '4293593374816726677147720217');
  t(
    '0x37bc13d810602438ce47db31c0e7a87e6b7831',
    '1242924848237600517379561065653635852461111345'
  );
  t('0x15a', '346');
  t('0x533921', '5454113');
  t(
    '0x770d01b680082f7c23db6444c14f885dacb63824',
    '679659960629478197799609320106784570818809968676'
  );
  t('0x1d35', '7477');
  t('0xaa906c1dabfebe6da', '196647076124632540890');
  t('0x655', '1621');
  t('0x11af668734ef7a60033c5f518c530', '5739161962048683655238213338449200');
  t(
    '0x9035964bc6d843d71d2ef9124632b039ca9ad9d6062cd',
    '863281823741412484448091339719676346358410323679011533'
  );
  t('0xfa3d98dfd239530c9a9556', '302522339292227790310118742');
  t('0x10fdb7f', '17816447');
  t('0x18d260c9d8f110eea9d29', '1875481379014053338979625');
  t('0x6dc6205912265fe68cb44ae5c', '543574178265693146271925448284');
  t('0x19d6ad933a8e5', '454557212846309');
  t('0x3e1ddad6b81e605', '279748388776437253');
  t(
    '0xe073b0188f2d6667b75f11f65a82fda',
    '18646734802776877837813543784990388186'
  );
  t(
    '0x81f531048349c33f91627d55e1b6bdd8a78',
    '707557451293532648521737780488438655322744'
  );
  t('0x78b8be03f14', '8295928577812');
  t('0x8', '8');
  t(
    '0x659874ecb742089cd0f2fc72a2e912d48334f2d',
    '36250497918673919606249316600592246963107483437'
  );
  t('0x2a03a8a82cd13dc18b5', '12400430345351117674677');
  t(
    '0x1e634adab5f805f52f70cac738dd261d7d6',
    '165447251922571882378062853693168471365590'
  );
  t(
    '0x2d0b0ae2b685425d29b0ecb3b5edfa717cb1417',
    '16071927572096392119675195392748578598193665047'
  );
  t('0x7a87c66768a00656e6143d364', '606741009919509661621760021348');
  t('0x32f102da079f77cac41', '15035262184397547023425');
  t('0xa440f8912c06198b', '11835733123122207115');
  t(
    '0xc008c78c61addc8e085ca3ff6e76fa13',
    '255257360887256236558111057213476239891'
  );
  t('0x11649c762', '4668901218');
  t('0x5572f75ca5f099eda', '98516089885791198938');
  t('0xaf', '175');
  t('0xc41a62e8bd1c7123c92220df', '60690961081480451125474894047');
  t(
    '0x765e3e05ca0c4b853679e80667d71bb51ec118c87c1',
    '2767923543808337676781898227256098432891809077954497'
  );
  t(
    '0x643b91b0289fe98c02b3f790ed41085ba228ba4c',
    '572227512274253374435718937361849836268824345164'
  );
  t('0x12', '18');
  t(
    '0x28ea59cbb990457243147551fc12145',
    '3399121160718415003848736585359106373'
  );
  t('0x1c149ecb87796c6a9116eaa5', '8690508679745247747029527205');
  t('0x3d24cfd5a3d86612', '4405874851959039506');
  t('0x55', '85');
  t(
    '0x2b1dc5d2236fc61848eb80e4032e842131c7ea1edd0',
    '1008232683040405259975519873135905613349630326730192'
  );
  t('0x3591a1d0aaaa14514d8a0a8826ee', '1086505871907198290436180679337710');
  t('0x1cba2a2f26dfe80b4c05d5f5496b9', '9322511400054499645799889634629305');
  t('0xdd2f83', '14495619');
  t('0x15c6f07', '22834951');
  t('0x2f8f19d0d3ff', '52291659944959');
  t('0x66877666510', '7045749564688');
  t(
    '0x153d9792e5b2bd96679de7bbee9f34cd131',
    '115644794069417523805676707579411471061297'
  );
  t(
    '0x1f6ce9be57023fe14fa060be4c01e7a',
    '2610723550735662335298250928784678522'
  );
  t(
    '0x9e63632c0dca5485e48bee9ad1b5a28049aa157e307',
    '3703754566336033126591165191492065433661004773319431'
  );
  t('0x8371b0d9c54b9de08c7', '38795452173112617863367');
  t('0xd3b35e07218e7b0c20bfc', '15995649127931990167915516');
  t('0xc6b6dfbdc40011198bd286c0', '61499113032079803212142642880');
  t(
    '0x7cf9a45c21858e891798ad503930df741b93f61f127',
    '2922422513262668930583564242609727203228735133315367'
  );
  t(
    '0x678049c017727c47ff4cc7ba35a849365fd111',
    '2308152223994224783375970725248611287908208913'
  );
  t('0x72b397d', '120273277');
  t('0xf9445c1a', '4182006810');
  t('0x4aff51f382c09c710fc5302d96b22', '24338029676537462451324711222209314');
  t(
    '0x10459598a086ea0f535900e70abab1e2ce7377',
    '362873575854611890806983645493404163992613751'
  );
  t('0x13640c20a010754124', '357697310375837778212');
  t('0x14147e01ca6501f252ca', '94825344299726024102602');
  t('0x466', '1126');
  t('0x74c698493dd81930c415', '551457940709438745789461');
  t(
    '0x2e5f2b623ba0cfee63689d427bad6eb6be5',
    '252471852786048400736119714699808445524965'
  );
  t(
    '0x38a52cc273671b0b8b078ec7f7f17102c9bd8c',
    '1263230489190036409842245570352830262209527180'
  );
  t(
    '0x78655d620287e6db76141a906c5701bdc47',
    '655497934873142286500331809443840511433799'
  );
  t('0x6eecb9a0d2fdd3b9a541f3', '134099742883823958727410163');
  t(
    '0x54bd61680d7ceb5beb37894e46599ef77',
    '1802215542237292717156325458542562242423'
  );
  t(
    '0x3a847dfcee83cd860720c8c0d8b53c7fda25d77',
    '20879758636120455697847204680129815020870720887'
  );
  t(
    '0x76eb310380a6f577f166b90d28c3b107a',
    '2529121398079147937688504401561827086458'
  );
  t('0xb73dda2c', '3074284076');
  t('0x3fd278b8d795a', '1122771216988506');
  t(
    '0x778da0c24f47774967183e20f8b1827299f',
    '650909720313013143267150228395755917748639'
  );
  t('0x6500d', '413709');
  t(
    '0x5a1bf29425c38c8f22a81fc3f105169ce4907acbb7',
    '131694699796400245476746024523885969905255483886519'
  );
  t('0x1e946da5ed27825dff2', '9025563349429600509938');
  t('0x23d288aea4', '153856028324');
  t('0x4bdc3b2b93e8cb0967b92', '5731840537208636428417938');
  t('0x1c57b1', '1857457');
  t(
    '0xb6dab6e4caceab483d2085d9d1766a088a19',
    '15928860703021466826033711809396661962705433'
  );
  t('0x3c9e2c9d', '1016999069');
  t('0x2d047117ed235996e16cb8', '54422637554743220665150648');
  t(
    '0xdda0ed04ef2e2b22a78e6455b862865ce',
    '4713519390205494839540473117533526320590'
  );
  t('0xa', '10');
  t('0x984e5039808eb14e793dd95', '2946024784801310608062668181');
  t('0x18b', '395');
  t('0x1e30c76d4c3babeded1eb9d54', '149496328017603561036003908948');
  t('0x4d1fb3fde8905', '1356776945387781');
  t(
    '0x1c6ad164b71af7cf0a92d7c2cf97ac3539cf4a190a6',
    '664509895940083432745213666480332815238360970924198'
  );
  t('0x29d730cd9c087e9', '188433258449504233');
  t(
    '0x4bbffc982422401d23e107db16617c0c0',
    '1611023225678920504550274579287300882624'
  );
  t(
    '0x34fa796a05fee3b566107aef6fea5327c9f794ce6f2',
    '1238848647360391370812154035309938766206217768199922'
  );
  t('0x2907465cdd296accc8ab4bd', '793605010131443253911401661');
  t('0x8aa7eb5be50', '9528363302480');
  t('0x15c14f12e032624a1206', '102735615609474072056326');
  t(
    '0x2d2650f939302bf9306f3db1fd19a7666712ff8',
    '16109941674613560268665251639244419228113121272'
  );
  t(
    '0xc0b42d10550ce0f4ea97567ede6bae89e93b',
    '16786869625005321512335207434991310677338427'
  );
  t('0xbcb3750ecd418048f3c9a907a1', '14950433883660044294408311998369');
  t('0x5dd205e2db781f491bff', '443054323304979904404479');
  t('0x3', '3');
  t(
    '0x108ba7dc0b83574862fffc703b989d5b578d862',
    '5903642409059499044928754369694490849414010978'
  );
  t('0x464a1', '287905');
  t('0x172f', '5935');
  t('0x3da62e0cd7d5edc8b6731fc', '1192467796933113553619464700');
  t('0x16077c0833e289da0b', '406367684695924791819');
  t(
    '0x784c5768a01120f03ef7a73160baaa0c5f',
    '40935359210071367599328032328982052080735'
  );
  t('0x3ba90bcf292a852be', '68783684858858197694');
  t('0x481df814c99e917079aeb', '5449011495668093676919531');
  t(
    '0xd14f6c28f6b1a66f83ec00058d939e6deae057',
    '4667774422027164788903448529246588503172243543'
  );
  t('0x36818425f9ca90bbe7a5b983c074', '1105511449492687971454561936457844');
  t(
    '0x2c977359c619b2a50e368272a2e12faa4',
    '948358531678320636918207632756786264740'
  );
  t(
    '0x6786f6aaa24466c66772096948176f023b4ee4267e3',
    '2420882788095960105392950361690122210695410931099619'
  );
  t('0x468dd654d147', '77575000215879');
  t('0x466d816c1a1', '4839758545313');
  t('0xd6bcf011b9965', '3777711518226789');
  t('0xcbd3b0dd08123466b52d', '962545403373485503722797');
  t(
    '0x41ea3b163a5614966ae7957bde8126e0a93d4a4',
    '23519245104289372491020812621093511206089774244'
  );
  t(
    '0x3d42f8df046ed6958fc5b33d9fa992b492f1e',
    '85386222153107555893245630091838241326575390'
  );
  t('0xfba75c3e2c8a777f', '18133563846735591295');
  t('0x6a7f74151fcc6ed8ed2b3f19100', '135002082526570912993917396947200');
  t(
    '0x5a0d410c996ff91fce14753b986e36ed02c8038a',
    '514104745647653703895348991238314574953430123402'
  );
  t(
    '0x98ef2d49bef8f926076d15ea07db47db',
    '203284532859688206391148792201594226651'
  );
  t(
    '0x1ed53c612a9ce8f563380bc006af575169',
    '10491910079311728745430929182060466098537'
  );
  t('0x11c25b068603cce9f3bbdca', '343512914478456071211695562');
  t(
    '0x772a8e4b457995e13897900d8000ad6c1f7c9a1',
    '42519933036531441133313813110786358673933846945'
  );
  t('0x1d1cd508f519156', '131111610056020310');
  t('0x5da9a9bf96be6918e50', '27644363394761964490320');
  t('0x14a08119381f59538f02a2c549605', '6693834434076143282016415621879301');
  t(
    '0x598e03f8e19f4379c5b70b9c15f4fa9156bcdf74116',
    '2094150575916241308211940593568291573516182910091542'
  );
  t(
    '0x355b5738c3cfe719582f351c17af6b629d4',
    '290502049209306091381681583617785118206420'
  );
  t('0x15a243c6d249', '23786665988681');
  t(
    '0x3a9e2ecf094bcff872507503010fcbac11',
    '19946638349599244406026473172687735467025'
  );
  t(
    '0x2b0142e2bc8feaa4657563be6095f30f9f787e6',
    '15344670653497010702533663436850880847648622566'
  );
  t('0x249c44f17568b404f004d1fab5d14', '11880762815518784994450284839918868');
  t(
    '0x5496b049593863de8ab664bcf192d8aa3046b16',
    '30182230828157060898612488525177295598317234966'
  );
  t(
    '0x3308c774d7a9d93620db30a6dc7c3afb6245cda884b8',
    '19094196084927690615894155917265930659289199085651128'
  );
  t(
    '0xe1aebc286f28a4213d5b89774ba1b2c',
    '18748973437595317918722188262730505004'
  );
  t('0x16fceb35ec78f61b7', '26503318076778308023');
  t('0x1e', '30');
  t('0x802a2fb0ef85471', '577202901428491377');
  t('0x22905c', '2265180');
  t(
    '0x1933e587c735a0944325aec2059cbfc7447e',
    '2195466647218532976318479234926892387091582'
  );
  t('0xdcb0', '56496');
  t('0x86aee9b70c52fb93dea1ce85e', '666919169547294519852185479262');
  t(
    '0x396769e718f39e316d00bcdc49721c228ea3',
    '5000590150769401690668401759809188422389411'
  );
  t(
    '0xad7b683e1fc7cdea2dd3fda24f96f6ce5022803f0dd',
    '4056709020997348015695058837718936633645982841827549'
  );
  t('0x325bd1', '3300305');
  t('0x3bace918a9ac3ab0e2c9d64', '1154290724173228330560822628');
  t(
    '0x2a549e1fc1c63f027e4af4879d42e41d2c',
    '14404335589336084186051447276771435879724'
  );
  t('0x6f0cfb185fd93b13bfe1', '524422133844304697999329');
  t(
    '0x1ed471cbb25831d740fad016d1d3b092756e7',
    '42970555202513419911347877108629841551775463'
  );
  t('0xf974bd83', '4185177475');
  t(
    '0x7f6d06d941b729ee41ec06af76ce5284c2',
    '43360782010770292902695704345624074945730'
  );
  t(
    '0x52b6d2313c32bd8b492b829f096003bab3ae2af0afb',
    '1934189728430433084118852318011260708451697369746171'
  );
  t(
    '0x109589b891295cc8f907838a8ff1a1a8d085d9b5e4c',
    '387803793636734915816188347290438110144007551802956'
  );
  t('0xad9a3ee51ae483bc3c92ee9719ed', '3521077463500554185208755094231533');
  t('0xf3f77b3b2e9b8c8ac86ff', '18433604493853855199299327');
  t('0x26d3525', '40711461');
  t(
    '0x38b954141f26f2a4afe6f7a9b5e34286428e3',
    '79061632155013935902994702509288944969197795'
  );
  t('0x38240bedb839f71c66a', '16569841585813541996138');
  t(
    '0x7518019e9f1b02abec44d0b94eb31e2641e59f76b',
    '10695796466552661793442196497637299434594286303083'
  );
  t(
    '0x3fa622c7ed221182e769dd30636092d163',
    '21658621556399738720046392793916662534499'
  );
  t('0x789b534735', '518002001717');
  t(
    '0x3a53c2755b1260d232bb8d62729689f9aeb62e35f60e',
    '21822791108317911324343501911275861646156768606549518'
  );
  t('0x5337ac5ca7b7ee1c', '5996450942817922588');
  t(
    '0x157b2e3d04dc2d3f2c5d24471f4ea6e',
    '1784586140646675991730453110223858286'
  );
  t(
    '0x1efcc47a12967085ad8cf3e4bd18a9d6',
    '41189283705768995637851264202925713878'
  );
  t('0x1889b9fe35e07e831ee8', '115877401735749106343656');
  t('0x7526131ba0fe6e6d338a003af179d', '38016936118707892590533223274977181');
  t('0x1ea4cb38dc109662aff507', '37045991477844459182355719');
  t('0x16166f015f2938', '6217115507829048');
  t('0x5f550f99', '1599410073');
  t('0x1a12b67c34d57d7b7ab7bac0', '8069232682011269556707244736');
  t(
    '0x23310db646fa85615a6d3a159621607b',
    '46777680511357499186246331786523140219'
  );
  t('0xdf', '223');
  t(
    '0x1f000932fa1ca86508eaafa96ab453c29',
    '659300071197325571806191735253210840105'
  );
  t('0x35ec5ce3922a7b1370', '994709174014332048240');
  t('0xe77b7374944b', '254517404013643');
  t(
    '0x1d0f1645dc1656b1174ce08b54fe4e40d8a45a3',
    '10368573985886829358840965263279576467697714595'
  );
  t('0xef557cf221b976840f876d6fb8f40', '77668303327151794801661259781214016');
  t(
    '0x11d071e8c8ed7f60c4fce894fa20a754',
    '23679184030321848843326203235370313556'
  );
  t('0x7cee134a1dab3d5cff44b067e971', '2533881063347006744885016016710001');
  t('0x2fc6363ce8caa6f2f7d7dc022c', '3785067239745545603746923020844');
  t('0x3bf5488fde2e', '65924670414382');
  t('0x5661a43808fca8b4914', '25495292807490092878100');
  t('0x25ad8a6e4382e566', '2714978356557964646');
  t(
    '0x43906e3351853cb2ad062c9315091712290',
    '367854393737791193668837913203410675507856'
  );
  t('0xecd7559017ec', '260409597630444');
  t('0x393b9b61ad34', '62928172723508');
  t(
    '0x31b7ebb7e8b136deb2b30b4593ad1a775e7',
    '270692937955729861614382230692061625415143'
  );
  t(
    '0x31c49f4d6a14d5a60e3be92b6c7d09a28ef733',
    '1109864730568327689119301182815368410691467059'
  );
  t('0x2ce42c8496', '192806683798');
  t('0x3abd', '15037');
  t('0xaa954cd38c39006a0d5d65a0b2', '13514993771256587973240014872754');
  t('0x6f8a84d', '116959309');
  t('0x5ab9da880303', '99754281796355');
  t('0x8273c422025895e75c', '2406418559385510209372');
  t('0x476bd81afce52', '1256456203521618');
  t(
    '0x84c5f2554693b9f5500f5bb85b158fde13e1f',
    '185058871763639409971122557584749513555394079'
  );
  t('0x7705c09763f0c8', '33501846960337096');
  t('0x514fb06b03ae4e191f9375228e62', '1649188801468585902988396540890722');
  t(
    '0x1fc020c94aec1d384d6939fc0b55b6275a201238e6',
    '46403408144166737594428754848567058468276133837030'
  );
  t('0xef3608f1c4e83', '4208245717356163');
  t('0x1acb8e8c35bb51f0a97f', '126536489245502589675903');
  t(
    '0x117eacbdcefdf0a6a17f2fff826d4a3757e9a72',
    '6242361556294202529040777632205572383849749106'
  );
  t('0x1725ab', '1516971');
  t('0xdee149', '14606665');
  t('0x278cbbef4c3b7a5cd3ae71e1', '12240052494575754714578579937');
  t('0x2570b2cd172507d801138abed2', '2966320491435734983427362569938');
  t('0x7a61cd850ab00f4e75b8fdd', '2367212971376424991309139933');
  t('0x1c46b1c9ef8122e5c0809', '2136485514231402911762441');
  t('0x159a345bdf44d369a', '24905827046438811290');
  t('0x7dd0aa8c145447eb92707ad1d07', '159489590003544512404938984070407');
  t(
    '0x24b44822469ba933aa9cc564a0b792345',
    '780612549310309792407655025164475245381'
  );
  t(
    '0x3a670f32d8a0d0c5fe1d860669e0fa790a28',
    '5087581870263472260351886848536796076771880'
  );
  t(
    '0x2413dcab4dd4acf50d555c028f9dfa7',
    '2997208574424073828351508066743213991'
  );
  t('0x339ef7a5f81e079987fa8c3ae71', '65437348931585993956193860824689');
  t(
    '0x15d1fe6b5dfe7e1a87573a3946b42cb4437be39c6',
    '1993149199833169001344544884949567309662274861510'
  );
  t(
    '0x7672ff747c781c06ec82bf84418073cc9158fdb',
    '42264090573810039509111928267687533762028343259'
  );
  t('0x66d1', '26321');
  t(
    '0x1487132dabd4006942ea4621e5753f54520400535ef3',
    '7680300593500415724655977000547063327920546737512179'
  );
  t('0x8ca', '2250');
  t(
    '0xab32097dd97de47c4f76930046f32a1',
    '14222362164666534040463596276719497889'
  );
  t(
    '0x198c811986971ccf4c7ae1d257bd14617',
    '543363838528230108444050115794098538007'
  );
  t(
    '0x3434042fa72b6bd086b5f583063b090b',
    '69389940122557978795038540059404601611'
  );
  t(
    '0x5180a950fe82c6376276a586c25b5c5c5b4bb8a21e0e',
    '30493736786942864405814520647491453938628818133720590'
  );
  t('0x6e1b6e52c50', '7566505880656');
  t('0x977a3cf2b2f06c31b3d', '44708264591227581831997');
  t('0x238d459b304a504cc07bde524ffcae', '184595724574603234807440528928406702');
  t(
    '0x2951804f7cc040bcabed937dfc07518ebf0c31156972',
    '15459035341493840021436449671050677487751991559285106'
  );
  t('0x2b0a983ec857ac84ef5f', '203257196630153042915167');
  t(
    '0x44ebf64ca6d7048632dc366985bacf6ca72f55bb89cb3',
    '412586872136786946015831424411703662517991501351918771'
  );
});
