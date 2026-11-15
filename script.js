
/* =========================================================
   NOVA SPACE EXPLORATION
   MAIN SYSTEM - THREE.JS R128
========================================================= */


/* =========================================================
   1. MISSION DATABASE
========================================================= */

const missions = {

    apollo: {
        number: "001",
        region: "THE MOON",
        name: "APOLLO LUNAR MODULE",

        subtitle: {
            es: "El vehículo que llevó a los primeros humanos a la superficie lunar.",
            en: "The spacecraft that carried the first humans to the lunar surface."
        },

        description: {
            es: "El módulo lunar Eagle de Apollo 11 descendió en el Mar de la Tranquilidad el 20 de julio de 1969. Su etapa de descenso permaneció en la Luna y sirvió como plataforma para el despegue de la etapa de ascenso.",
            en: "Apollo 11's Eagle lunar module landed in the Sea of Tranquility on July 20, 1969. Its descent stage remained on the Moon and served as the launch platform for the ascent stage."
        },

        facts: {
            es: [
                ["AÑO", "1969"],
                ["DESTINO", "LUNA"],
                ["MISIÓN", "APOLLO 11"]
            ],
            en: [
                ["YEAR", "1969"],
                ["DESTINATION", "MOON"],
                ["MISSION", "APOLLO 11"]
            ]
        },

        objective: {
            es: "Investiga el módulo lunar y registra sus componentes.",
            en: "Investigate the lunar module and record its components."
        },

        discoveries: [
            {
                title: { es: "ETAPA DE DESCENSO", en: "DESCENT STAGE" },
                text: {
                    es: "La etapa inferior del Eagle contenía las patas de aterrizaje y el motor de descenso. Permaneció en la superficie lunar después de la partida de los astronautas.",
                    en: "The lower stage of Eagle contained the landing legs and descent engine. It remained on the lunar surface after the astronauts departed."
                },
                position: [-5, 0, -5]
            },
            {
                title: { es: "ETAPA DE ASCENSO", en: "ASCENT STAGE" },
                text: {
                    es: "La etapa superior alojaba a los astronautas y los sistemas necesarios para abandonar la superficie lunar y reunirse con el módulo de mando.",
                    en: "The upper stage housed the astronauts and the systems needed to leave the lunar surface and rendezvous with the command module."
                },
                position: [5, 0, -7]
            },
            {
                title: { es: "LUGAR DE ALUNIZAJE", en: "LANDING SITE" },
                text: {
                    es: "Apollo 11 aterrizó en el Mar de la Tranquilidad. Fue el primer alunizaje tripulado de la historia.",
                    en: "Apollo 11 landed in the Sea of Tranquility. It was the first crewed Moon landing in history."
                },
                position: [0, 0, 8]
            }
        ]
    },


    rover: {
        number: "002",
        region: "THE MOON",
        name: "LUNAR ROVING VEHICLE",

        subtitle: {
            es: "El vehículo eléctrico que permitió recorrer mayores distancias en la Luna.",
            en: "The electric vehicle that allowed astronauts to travel farther across the Moon."
        },

        description: {
            es: "El Lunar Roving Vehicle fue utilizado durante Apollo 15, Apollo 16 y Apollo 17 entre 1971 y 1972. Permitió transportar astronautas y equipos científicos por la superficie lunar.",
            en: "The Lunar Roving Vehicle was used during Apollo 15, Apollo 16 and Apollo 17 between 1971 and 1972. It transported astronauts and scientific equipment across the lunar surface."
        },

        facts: {
            es: [
                ["AÑO", "1971–1972"],
                ["DESTINO", "LUNA"],
                ["TIPO", "VEHÍCULO ELÉCTRICO"]
            ],
            en: [
                ["YEAR", "1971–1972"],
                ["DESTINATION", "MOON"],
                ["TYPE", "ELECTRIC VEHICLE"]
            ]
        },

        objective: {
            es: "Explora el vehículo y analiza sus sistemas de movilidad.",
            en: "Explore the vehicle and examine its mobility systems."
        },

        discoveries: [
            {
                title: { es: "RUEDAS LUNARES", en: "LUNAR WHEELS" },
                text: {
                    es: "Sus cuatro ruedas utilizaban una estructura de malla metálica diseñada para desplazarse sobre el terreno lunar.",
                    en: "Its four wheels used a wire-mesh structure designed to travel across lunar terrain."
                },
                position: [-5, 0, -4]
            },
            {
                title: { es: "SISTEMA DE CONTROL", en: "CONTROL SYSTEM" },
                text: {
                    es: "El vehículo contaba con controles manuales para que los astronautas pudieran dirigirlo mientras exploraban la superficie.",
                    en: "The vehicle had manual controls that allowed astronauts to steer while exploring the surface."
                },
                position: [5, 0, -5]
            },
            {
                title: { es: "EQUIPO CIENTÍFICO", en: "SCIENTIFIC EQUIPMENT" },
                text: {
                    es: "El rover transportaba herramientas, cámaras y equipos para estudiar el suelo y las rocas lunares.",
                    en: "The rover carried tools, cameras and equipment to study lunar soil and rocks."
                },
                position: [0, 0, 8]
            }
        ]
    },


    sojourner: {
        number: "003",
        region: "MARS",
        name: "SOJOURNER ROVER",

        subtitle: {
            es: "El primer rover que exploró la superficie de Marte.",
            en: "The first rover to explore the surface of Mars."
        },

        description: {
            es: "Sojourner llegó a Marte en 1997 como parte de la misión Mars Pathfinder. Estudió rocas y suelo marciano, demostrando que los vehículos robóticos podían explorar otros mundos.",
            en: "Sojourner arrived on Mars in 1997 as part of the Mars Pathfinder mission. It studied Martian rocks and soil, demonstrating that robotic vehicles could explore other worlds."
        },

        facts: {
            es: [
                ["AÑO", "1997"],
                ["DESTINO", "MARTE"],
                ["MISIÓN", "MARS PATHFINDER"]
            ],
            en: [
                ["YEAR", "1997"],
                ["DESTINATION", "MARS"],
                ["MISSION", "MARS PATHFINDER"]
            ]
        },

        objective: {
            es: "Analiza el rover y busca evidencias del terreno marciano.",
            en: "Analyze the rover and search for evidence about Martian terrain."
        },

        discoveries: [
            {
                title: { es: "RUEDAS DEL ROVER", en: "ROVER WHEELS" },
                text: {
                    es: "Sojourner utilizaba seis ruedas para desplazarse por la superficie rocosa de Marte.",
                    en: "Sojourner used six wheels to travel across the rocky surface of Mars."
                },
                position: [-5, 0, -5]
            },
            {
                title: { es: "INSTRUMENTOS CIENTÍFICOS", en: "SCIENTIFIC INSTRUMENTS" },
                text: {
                    es: "Sus instrumentos permitieron estudiar la composición de las rocas y del suelo marciano.",
                    en: "Its instruments helped study the composition of Martian rocks and soil."
                },
                position: [5, 0, -5]
            },
            {
                title: { es: "MARS PATHFINDER", en: "MARS PATHFINDER" },
                text: {
                    es: "La misión Pathfinder llevó a Sojourner a Marte y utilizó una plataforma de aterrizaje para comenzar la exploración.",
                    en: "The Pathfinder mission delivered Sojourner to Mars using a lander platform from which exploration began."
                },
                position: [0, 0, 8]
            }
        ]
    },


    ingenuity: {
        number: "004",
        region: "MARS",
        name: "INGENUITY HELICOPTER",

        subtitle: {
            es: "El pequeño helicóptero que demostró que era posible volar en otro planeta.",
            en: "The small helicopter that demonstrated powered flight on another planet was possible."
        },

        description: {
            es: "Ingenuity viajó a Marte junto al rover Perseverance. El 19 de abril de 2021 realizó el primer vuelo controlado y propulsado en otro planeta. Completó 72 vuelos antes de finalizar su misión en enero de 2024.",
            en: "Ingenuity traveled to Mars with the Perseverance rover. On April 19, 2021, it performed the first controlled, powered flight on another planet. It completed 72 flights before its mission ended in January 2024."
        },

        facts: {
            es: [
                ["AÑO", "2021"],
                ["DESTINO", "MARTE"],
                ["VUELOS", "72"]
            ],
            en: [
                ["YEAR", "2021"],
                ["DESTINATION", "MARS"],
                ["FLIGHTS", "72"]
            ]
        },

        objective: {
            es: "Investiga el helicóptero y descubre cómo funcionaba su sistema de vuelo.",
            en: "Investigate the helicopter and discover how its flight system worked."
        },

        discoveries: [
            {
                title: { es: "ROTORES", en: "ROTOR SYSTEM" },
                text: {
                    es: "Ingenuity utilizaba dos pares de palas contrarrotatorias para generar sustentación en la tenue atmósfera marciana.",
                    en: "Ingenuity used two pairs of counter-rotating blades to generate lift in Mars' thin atmosphere."
                },
                position: [-5, 0, -5]
            },
            {
                title: { es: "PANEL SOLAR", en: "SOLAR PANEL" },
                text: {
                    es: "Un panel solar recargaba las baterías que alimentaban los sistemas del helicóptero.",
                    en: "A solar panel recharged the batteries that powered the helicopter's systems."
                },
                position: [5, 0, -5]
            },
            {
                title: { es: "PRIMER VUELO", en: "FIRST FLIGHT" },
                text: {
                    es: "El 19 de abril de 2021 Ingenuity realizó el primer vuelo propulsado y controlado en otro planeta.",
                    en: "On April 19, 2021, Ingenuity performed the first powered and controlled flight on another planet."
                },
                position: [0, 0, 8]
            }
        ]
    }

};


/* =========================================================
   2. TRANSLATIONS
========================================================= */

const translations = {

    es: {
        systemOnline: "SISTEMA EN LÍNEA",
        heroEyebrow: "PROYECTO DE EXPLORACIÓN INSPIRADO EN NASA",
        heroCopy: "Explora misiones históricas, descubre tecnología espacial y recorre mundos que cambiaron nuestra forma de entender el universo.",
        exploreMissions: "EXPLORAR MISIONES",
        scrollExplore: "DESPLAZA PARA EXPLORAR",
        selectMission: "SELECCIONA TU DESTINO",
        missionsTitle: "Misiones de exploración",
        missionsNote: "Cuatro hitos tecnológicos. Cuatro entornos para explorar.",
        viewMission: "VER MISIÓN",
        back: "VOLVER",
        missionBriefing: "INFORMACIÓN DE MISIÓN",
        beginMission: "INICIAR EXPLORACIÓN",
        currentMission: "MISIÓN ACTUAL",
        explorationLive: "EXPLORACIÓN EN CURSO",
        map: "MAPA",
        pause: "PAUSA",
        exit: "SALIR",
        coordinates: "COORDENADAS",
        discoveries: "DESCUBRIMIENTOS",
        objective: "OBJETIVO",
        move: "MOVERSE",
        interact: "INTERACTUAR",
        findSignal: "BUSCA SEÑALES CERCANAS",
        discoveryLogged: "DESCUBRIMIENTO REGISTRADO",
        closeData: "CERRAR INFORMACIÓN",
        missionPaused: "MISIÓN EN PAUSA",
        pauseCopy: "La exploración está detenida.",
        resume: "CONTINUAR",
        leaveMission: "ABANDONAR MISIÓN",
        mapTitle: "MAPA DE EXPLORACIÓN",
        mapLegend: "▲ Tu posición · ● Señales detectadas",
        missionComplete: "MISIÓN COMPLETADA",
        completeCopy: "Has registrado todos los descubrimientos de esta exploración.",
        returnMissions: "VOLVER A LAS MISIONES",
        readyExplore: "LISTO PARA EXPLORAR",
        clickStart: "Haz clic para activar la cámara y comenzar.",
        enterWorld: "ENTRAR AL ENTORNO",
        footerNote: "UN PROYECTO EDUCATIVO DE EXPLORACIÓN ESPACIAL"
    },

    en: {
        systemOnline: "SYSTEM ONLINE",
        heroEyebrow: "NASA-INSPIRED EXPLORATION PROJECT",
        heroCopy: "Explore historic missions, discover space technology and travel across worlds that changed our understanding of the universe.",
        exploreMissions: "EXPLORE MISSIONS",
        scrollExplore: "SCROLL TO EXPLORE",
        selectMission: "SELECT YOUR DESTINATION",
        missionsTitle: "Exploration missions",
        missionsNote: "Four technological milestones. Four environments to explore.",
        viewMission: "VIEW MISSION",
        back: "BACK",
        missionBriefing: "MISSION BRIEFING",
        beginMission: "BEGIN EXPLORATION",
        currentMission: "CURRENT MISSION",
        explorationLive: "EXPLORATION LIVE",
        map: "MAP",
        pause: "PAUSE",
        exit: "EXIT",
        coordinates: "COORDINATES",
        discoveries: "DISCOVERIES",
        objective: "OBJECTIVE",
        move: "MOVE",
        interact: "INTERACT",
        findSignal: "SEARCH FOR NEARBY SIGNALS",
        discoveryLogged: "DISCOVERY LOGGED",
        closeData: "CLOSE INFORMATION",
        missionPaused: "MISSION PAUSED",
        pauseCopy: "Exploration is currently paused.",
        resume: "RESUME",
        leaveMission: "LEAVE MISSION",
        mapTitle: "EXPLORATION MAP",
        mapLegend: "▲ Your position · ● Detected signals",
        missionComplete: "MISSION COMPLETE",
        completeCopy: "You have recorded all discoveries in this exploration.",
        returnMissions: "RETURN TO MISSIONS",
        readyExplore: "READY TO EXPLORE",
        clickStart: "Click to activate the camera and begin.",
        enterWorld: "ENTER ENVIRONMENT",
        footerNote: "AN EDUCATIONAL SPACE EXPLORATION PROJECT"
    }

};


/* =========================================================
   3. GLOBAL VARIABLES
========================================================= */

let currentLanguage = "es";
let currentMission = null;

let scene = null;
let camera = null;
let renderer = null;
let clock = null;

let player = null;
let worldGroup = null;

let discoveryObjects = [];
let discovered = [];

let keys = {};

let pointerLocked = false;
let missionRunning = false;
let missionPaused = false;
let discoveryOpen = false;

let yaw = 0;
let pitch = 0;

let audioContext = null;
let masterGain = null;
let audioEnabled = false;

let animationFrame = null;


/* =========================================================
   4. DOM HELPERS
========================================================= */

const $ = (id) => document.getElementById(id);


function setScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = $(screenId);

    if (target) {
        target.classList.add("active");
    }

}


function show(element) {

    if (element) {
        element.classList.remove("hidden");
    }

}


function hide(element) {

    if (element) {
        element.classList.add("hidden");
    }

}


function getText(value) {

    if (typeof value === "string") return value;

    return value[currentLanguage] || value.es || "";

}


function setText(element, value) {

    if (element) {
        element.textContent = value;
    }

}


/* =========================================================
   5. LANGUAGE SYSTEM
========================================================= */

function changeLanguage(language) {

    if (!translations[language]) return;

    currentLanguage = language;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });

    if (currentMission) {

        updateMissionText();

        if (discoveryOpen) {
            updateDiscoveryPanel();
        }

    }

}


$("languageSelect")?.addEventListener("change", event => {
    changeLanguage(event.target.value);
});


/* =========================================================
   6. HOME AND MISSION SELECTION
========================================================= */

function openMission(missionId) {

    const mission = missions[missionId];

    if (!mission) return;

    currentMission = missionId;

    setText($("briefNumber"), mission.number + " / " + mission.region);
    setText($("briefTitle"), mission.name);
    setText($("briefSubtitle"), getText(mission.subtitle));
    setText($("briefDescription"), getText(mission.description));

    const facts = mission.facts[currentLanguage];

    $("briefFacts").innerHTML = facts.map(fact => `
        <div class="fact-item">
            <span>${fact[0]}</span>
            <strong>${fact[1]}</strong>
        </div>
    `).join("");

    const visual = $("briefingVisual");

    if (visual) {
        visual.dataset.mission = missionId;
    }

    setScreen("briefingScreen");

}


document.querySelectorAll("[data-open]").forEach(button => {

    button.addEventListener("click", () => {
        openMission(button.dataset.open);
    });

});


document.querySelectorAll(".mission-card").forEach(card => {

    card.addEventListener("click", event => {

        if (event.target.closest("button")) return;

        openMission(card.dataset.mission);

    });

});


$("exploreButton")?.addEventListener("click", () => {

    $("missionsSection")?.scrollIntoView({
        behavior: "smooth"
    });

});


$("backHome")?.addEventListener("click", () => {
    setScreen("homeScreen");
});


/* =========================================================
   7. MISSION TEXT
========================================================= */

function updateMissionText() {

    if (!currentMission) return;

    const mission = missions[currentMission];

    setText($("hudMission"), mission.name);
    setText($("startMissionName"), mission.name);
    setText($("objectiveText"), getText(mission.objective));

    setText(
        $("discoveryCount"),
        discovered.length + " / " + mission.discoveries.length
    );

}


/* =========================================================
   8. START MISSION
========================================================= */

$("startMission")?.addEventListener("click", startMission);


function startMission() {

    if (!currentMission) return;

    missionRunning = true;
    missionPaused = true;
    discoveryOpen = false;

    discovered = [];
    discoveryObjects = [];

    yaw = 0;
    pitch = 0;

    updateMissionText();

    setScreen("gameScreen");

    hide($("pausePanel"));
    hide($("mapPanel"));
    hide($("completePanel"));
    hide($("discoveryPanel"));

    show($("startOverlay"));

    if (renderer) {

        clearWorld();

    }

    requestAnimationFrame(() => {

        if (!renderer) {
            initializeThree();
        }

        resizeRenderer();

        buildWorld();

        updateMissionText();

    });

}


/* =========================================================
   9. THREE.JS INITIALIZATION
========================================================= */

function initializeThree() {

    const container = $("three-container");

    if (!container || !window.THREE) {

        console.error("Three.js no está disponible.");

        return;

    }

    scene = new THREE.Scene();

    scene.background = new THREE.Color(
        currentMission === "sojourner" ||
        currentMission === "ingenuity"
            ? 0x9b5c39
            : 0x080d19
    );

    scene.fog = new THREE.FogExp2(
        currentMission === "sojourner" ||
        currentMission === "ingenuity"
            ? 0x9b5c39
            : 0x080d19,
        0.009
    );


    camera = new THREE.PerspectiveCamera(
        70,
        container.clientWidth / Math.max(container.clientHeight, 1),
        0.1,
        600
    );

    camera.position.set(0, 2.2, 8);


    renderer = new THREE.WebGLRenderer({

        antialias: true,
        alpha: false,
        powerPreference: "high-performance"

    });

    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, 1.75)
    );

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.outputEncoding = THREE.sRGBEncoding;

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    renderer.physicallyCorrectLights = true;

    container.innerHTML = "";
    container.appendChild(renderer.domElement);


    clock = new THREE.Clock();

    addLighting();

    animate();

}


function resizeRenderer() {

    if (!renderer || !camera) return;

    const container = $("three-container");

    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    if (width <= 0 || height <= 0) return;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);

}


window.addEventListener("resize", resizeRenderer);


/* =========================================================
   10. LIGHTING
========================================================= */

function addLighting() {

    const hemisphere = new THREE.HemisphereLight(
        0xc9dcff,
        0x29202a,
        1.3
    );

    scene.add(hemisphere);


    const sunlight = new THREE.DirectionalLight(
        0xffe3bc,
        3.2
    );

    sunlight.position.set(-35, 45, -20);

    sunlight.castShadow = true;

    sunlight.shadow.mapSize.width = 2048;
    sunlight.shadow.mapSize.height = 2048;

    sunlight.shadow.camera.left = -40;
    sunlight.shadow.camera.right = 40;
    sunlight.shadow.camera.top = 40;
    sunlight.shadow.camera.bottom = -40;

    sunlight.shadow.camera.near = 1;
    sunlight.shadow.camera.far = 120;

    sunlight.shadow.bias = -0.00025;

    scene.add(sunlight);


    const fillLight = new THREE.PointLight(
        0x709bd8,
        1.2,
        100
    );

    fillLight.position.set(15, 12, 15);

    scene.add(fillLight);


    const ambient = new THREE.AmbientLight(
        0xffffff,
        0.25
    );

    scene.add(ambient);

}


/* =========================================================
   11. MATERIAL HELPERS
========================================================= */

function material(color, roughness = 0.8, metalness = 0.1) {

    return new THREE.MeshStandardMaterial({

        color,
        roughness,
        metalness

    });

}


function addMesh(geometry, mat, x, y, z, parent = worldGroup) {

    const mesh = new THREE.Mesh(geometry, mat);

    mesh.position.set(x, y, z);

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    parent.add(mesh);

    return mesh;

}


/* =========================================================
   12. WORLD GENERATION
========================================================= */

function clearWorld() {

    if (!worldGroup) return;

    scene.remove(worldGroup);

    worldGroup.traverse(object => {

        if (object.geometry) {
            object.geometry.dispose();
        }

        if (object.material) {

            if (Array.isArray(object.material)) {
                object.material.forEach(m => m.dispose());
            } else {
                object.material.dispose();
            }

        }

    });

    worldGroup = null;
    discoveryObjects = [];

}


function buildWorld() {

    if (!scene || !currentMission) return;

    clearWorld();

    worldGroup = new THREE.Group();

    scene.add(worldGroup);

    const isMars =
        currentMission === "sojourner" ||
        currentMission === "ingenuity";


    scene.background = new THREE.Color(
        isMars ? 0x9b5c39 : 0x080d19
    );

    scene.fog.color.set(
        isMars ? 0x9b5c39 : 0x080d19
    );


    buildTerrain(isMars);
    buildStars();
    buildHorizon(isMars);

    if (currentMission === "apollo") {
        buildApollo();
    }

    if (currentMission === "rover") {
        buildLunarRover();
    }

    if (currentMission === "sojourner") {
        buildSojourner();
    }

    if (currentMission === "ingenuity") {
        buildIngenuity();
    }

    buildDiscoveries();

    buildEnvironmentDetails(isMars);

}


/* =========================================================
   13. PROCEDURAL TERRAIN
========================================================= */

function terrainHeight(x, z, isMars) {

    let height = 0;

    height += Math.sin(x * 0.22) * 0.22;
    height += Math.cos(z * 0.19) * 0.2;
    height += Math.sin((x + z) * 0.12) * 0.28;

    height += Math.cos(x * 0.55 + z * 0.3) * 0.08;

    if (isMars) {
        height += Math.sin(x * 0.09) * 0.55;
    }

    return height;

}


function buildTerrain(isMars) {

    const size = 160;
    const segments = 150;

    const geometry = new THREE.PlaneGeometry(
        size,
        size,
        segments,
        segments
    );

    geometry.rotateX(-Math.PI / 2);

    const positions = geometry.attributes.position;

    for (let i = 0; i < positions.count; i++) {

        const x = positions.getX(i);
        const z = positions.getZ(i);

        let y = terrainHeight(x, z, isMars);

        for (const crater of [
            [-12, -10, 4],
            [13, 8, 5],
            [22, -17, 3],
            [-24, 18, 6]
        ]) {

            const dx = x - crater[0];
            const dz = z - crater[1];

            const distance = Math.sqrt(dx * dx + dz * dz);

            const radius = crater[2];

            if (distance < radius) {

                const depth =
                    Math.cos((distance / radius) * Math.PI / 2);

                y -= depth * 1.4;

            }

        }

        positions.setY(i, y);

    }

    geometry.computeVertexNormals();


    const terrainMaterial = new THREE.MeshStandardMaterial({

        color: isMars ? 0x9b5334 : 0x73777c,

        roughness: 1,
        metalness: 0,

        flatShading: true

    });


    const ground = new THREE.Mesh(
        geometry,
        terrainMaterial
    );

    ground.receiveShadow = true;
    ground.castShadow = false;

    worldGroup.add(ground);


    const lowerGround = addMesh(

        new THREE.BoxGeometry(180, 4, 180),

        material(isMars ? 0x5e3429 : 0x40454c),

        0,
        -2.2,
        0

    );

    lowerGround.receiveShadow = true;

}


/* =========================================================
   14. STARS
========================================================= */

function buildStars() {

    const count = 1800;

    const positions = [];

    for (let i = 0; i < count; i++) {

        positions.push(
            (Math.random() - 0.5) * 300,
            Math.random() * 90 + 10,
            (Math.random() - 0.5) * 300
        );

    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
    );

    const stars = new THREE.Points(

        geometry,

        new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.35,
            transparent: true,
            opacity: 0.85
        })

    );

    scene.add(stars);

}


/* =========================================================
   15. DISTANT ENVIRONMENT
========================================================= */

function buildHorizon(isMars) {

    const color = isMars ? 0x6d392d : 0x414750;

    for (let i = 0; i < 22; i++) {

        const angle = (i / 22) * Math.PI * 2;

        const distance = 55 + Math.random() * 20;

        const height = 5 + Math.random() * 12;

        const width = 5 + Math.random() * 10;

        const rock = addMesh(

            new THREE.DodecahedronGeometry(1, 1),

            material(color + Math.floor(Math.random() * 0x101010)),

            Math.cos(angle) * distance,
            height / 2 - 1,
            Math.sin(angle) * distance

        );

        rock.scale.set(width, height, width);

        rock.rotation.set(
            Math.random(),
            Math.random(),
            Math.random()
        );

    }

}


function buildEnvironmentDetails(isMars) {

    const rockMaterial = material(
        isMars ? 0x78432e : 0x555b61
    );

    for (let i = 0; i < 75; i++) {

        const x = (Math.random() - 0.5) * 95;
        const z = (Math.random() - 0.5) * 95;

        if (Math.abs(x) < 5 && Math.abs(z) < 5) continue;

        const size = 0.25 + Math.random() * 1.1;

        const rock = addMesh(

            new THREE.DodecahedronGeometry(size, 1),

            rockMaterial,

            x,
            terrainHeight(x, z, isMars) + size * 0.5,
            z

        );

        rock.rotation.set(
            Math.random(),
            Math.random(),
            Math.random()
        );

    }

}


/* =========================================================
   16. APOLLO LUNAR MODULE
========================================================= */

function buildApollo() {

    const gold = material(0xb69a5d, 0.5, 0.65);
    const silver = material(0xb9c0c4, 0.45, 0.65);
    const dark = material(0x20252a, 0.8, 0.2);
    const black = material(0x090c10, 0.9, 0.1);

    const apollo = new THREE.Group();

    apollo.position.set(0, 0, -2);

    worldGroup.add(apollo);


    // DESCENT STAGE

    const base = new THREE.Mesh(

        new THREE.CylinderGeometry(3.1, 3.5, 1.2, 6),

        gold

    );

    base.position.y = 2.4;
    base.castShadow = true;
    base.receiveShadow = true;

    apollo.add(base);


    // CENTRAL BODY

    const body = new THREE.Mesh(

        new THREE.CylinderGeometry(1.7, 2.3, 2.5, 6),

        gold

    );

    body.position.y = 4.2;
    body.castShadow = true;

    apollo.add(body);


    // UPPER ASCENT MODULE

    const upper = new THREE.Mesh(

        new THREE.CylinderGeometry(1.25, 1.65, 2.4, 6),

        silver

    );

    upper.position.y = 6.55;
    upper.castShadow = true;

    apollo.add(upper);


    const cabin = new THREE.Mesh(

        new THREE.SphereGeometry(1.15, 12, 10),

        gold

    );

    cabin.position.y = 7.65;
    cabin.scale.y = 0.8;

    apollo.add(cabin);


    // WINDOWS

    for (let i = 0; i < 3; i++) {

        const angle = (i / 3) * Math.PI * 2;

        const windowMesh = new THREE.Mesh(

            new THREE.BoxGeometry(0.65, 0.55, 0.12),

            new THREE.MeshStandardMaterial({
                color: 0x142d43,
                metalness: 0.7,
                roughness: 0.15
            })

        );

        windowMesh.position.set(
            Math.sin(angle) * 1.05,
            6.6,
            Math.cos(angle) * 1.05
        );

        windowMesh.lookAt(
            Math.sin(angle) * 4,
            6.6,
            Math.cos(angle) * 4
        );

        apollo.add(windowMesh);

    }


    // LANDING LEGS

    for (let i = 0; i < 4; i++) {

        const angle = (i / 4) * Math.PI * 2;

        const x = Math.sin(angle) * 2.4;
        const z = Math.cos(angle) * 2.4;

        const leg = new THREE.Mesh(

            new THREE.CylinderGeometry(0.12, 0.16, 3.2, 8),

            silver

        );

        leg.position.set(x, 1.3, z);
        leg.rotation.z = Math.sin(angle) * 0.55;
        leg.rotation.x = Math.cos(angle) * 0.55;

        apollo.add(leg);


        const foot = new THREE.Mesh(

            new THREE.CylinderGeometry(0.7, 0.7, 0.15, 12),

            silver

        );

        foot.position.set(x * 1.4, 0.1, z * 1.4);

        apollo.add(foot);

    }


    // DESCENT ENGINE

    const engine = new THREE.Mesh(

        new THREE.ConeGeometry(0.7, 1.6, 12),

        dark

    );

    engine.position.y = 1.2;
    engine.rotation.x = Math.PI;

    apollo.add(engine);


    // ANTENNAS

    const antenna = new THREE.Mesh(

        new THREE.CylinderGeometry(0.035, 0.035, 2.5, 6),

        silver

    );

    antenna.position.set(2, 7.5, 0.4);
    antenna.rotation.z = -0.4;

    apollo.add(antenna);


    // GOLDEN PANELS

    for (let i = 0; i < 4; i++) {

        const angle = (i / 4) * Math.PI * 2;

        const panel = new THREE.Mesh(

            new THREE.BoxGeometry(1.2, 1.3, 0.08),

            gold

        );

        panel.position.set(
            Math.cos(angle) * 1.9,
            4.2,
            Math.sin(angle) * 1.9
        );

        panel.lookAt(0, 4.2, 0);

        apollo.add(panel);

    }

}


/* =========================================================
   17. LUNAR ROVING VEHICLE
========================================================= */

function buildLunarRover() {

    const silver = material(0xb6bdc4, 0.5, 0.65);
    const dark = material(0x20272d, 0.8, 0.25);
    const gold = material(0xc2a56b, 0.5, 0.65);

    const rover = new THREE.Group();

    rover.position.set(0, 0, -2);

    worldGroup.add(rover);


    // MAIN FRAME

    const chassis = new THREE.Mesh(

        new THREE.BoxGeometry(5, 0.25, 3),

        silver

    );

    chassis.position.y = 1.8;
    rover.add(chassis);


    // SEAT SUPPORT

    const seat = new THREE.Mesh(

        new THREE.BoxGeometry(2.6, 0.25, 1.2),

        gold

    );

    seat.position.set(0, 2.15, 0);
    rover.add(seat);


    // SEATS

    for (let i = 0; i < 2; i++) {

        const x = i === 0 ? -0.8 : 0.8;

        const cushion = new THREE.Mesh(

            new THREE.BoxGeometry(1.1, 0.25, 1),

            dark

        );

        cushion.position.set(x, 2.55, 0);

        rover.add(cushion);


        const back = new THREE.Mesh(

            new THREE.BoxGeometry(1.1, 1.2, 0.15),

            dark

        );

        back.position.set(x, 3.1, -0.45);

        rover.add(back);

    }


    // WHEELS

    for (let side of [-1, 1]) {

        for (let front of [-1, 1]) {

            const wheel = new THREE.Mesh(

                new THREE.CylinderGeometry(1, 1, 0.35, 24),

                dark

            );

            wheel.rotation.z = Math.PI / 2;

            wheel.position.set(
                side * 2.6,
                1.05,
                front * 1.35
            );

            rover.add(wheel);


            const hub = new THREE.Mesh(

                new THREE.CylinderGeometry(0.28, 0.28, 0.42, 16),

                silver

            );

            hub.rotation.z = Math.PI / 2;

            hub.position.copy(wheel.position);

            rover.add(hub);

            // WHEEL SPOKES

            for (let j = 0; j < 12; j++) {

                const angle = (j / 12) * Math.PI * 2;

                const spoke = new THREE.Mesh(

                    new THREE.BoxGeometry(0.12, 0.09, 1.9),

                    silver

                );

                spoke.position.set(
                    side * 2.6,
                    1.05 + Math.sin(angle) * 0.88,
                    front * 1.35 + Math.cos(angle) * 0.88
                );

                spoke.rotation.x = angle;

                rover.add(spoke);

            }

        }

    }


    // STEERING COLUMN

    const steering = new THREE.Mesh(

        new THREE.CylinderGeometry(0.05, 0.05, 1.4, 8),

        silver

    );

    steering.position.set(0, 2.9, 0.75);
    steering.rotation.x = -0.4;

    rover.add(steering);


    // ANTENNA

    const antenna = new THREE.Mesh(

        new THREE.CylinderGeometry(0.025, 0.025, 2, 8),

        silver

    );

    antenna.position.set(1.6, 3, -0.8);
    antenna.rotation.z = -0.35;

    rover.add(antenna);


    // SCIENTIFIC EQUIPMENT

    const equipment = new THREE.Mesh(

        new THREE.BoxGeometry(1, 0.8, 0.8),

        gold

    );

    equipment.position.set(1.6, 2.3, -0.5);

    rover.add(equipment);

}


/* =========================================================
   18. SOJOURNER ROVER
========================================================= */

function buildSojourner() {

    const gold = material(0xc49a50, 0.5, 0.55);
    const dark = material(0x272b2e, 0.8, 0.25);
    const silver = material(0xb5b8ba, 0.45, 0.7);

    const rover = new THREE.Group();

    rover.position.set(0, 0, -2);

    worldGroup.add(rover);


    // BODY

    const body = new THREE.Mesh(

        new THREE.BoxGeometry(2.5, 1.2, 2),

        gold

    );

    body.position.y = 1.7;

    rover.add(body);


    // TOP PANEL

    const panel = new THREE.Mesh(

        new THREE.BoxGeometry(2.2, 0.15, 1.8),

        material(0x253a50, 0.4, 0.6)

    );

    panel.position.y = 2.4;

    rover.add(panel);


    // SIX WHEELS

    for (let side of [-1, 1]) {

        for (let i = 0; i < 3; i++) {

            const z = (i - 1) * 1.25;

            const wheel = new THREE.Mesh(

                new THREE.CylinderGeometry(0.55, 0.55, 0.35, 16),

                dark

            );

            wheel.rotation.z = Math.PI / 2;

            wheel.position.set(
                side * 1.4,
                0.8,
                z
            );

            rover.add(wheel);


            const hub = new THREE.Mesh(

                new THREE.CylinderGeometry(0.2, 0.2, 0.4, 12),

                silver

            );

            hub.rotation.z = Math.PI / 2;

            hub.position.copy(wheel.position);

            rover.add(hub);


            // SUSPENSION

            const suspension = new THREE.Mesh(

                new THREE.CylinderGeometry(0.06, 0.06, 1.1, 6),

                silver

            );

            suspension.position.set(
                side * 1.1,
                1.35,
                z
            );

            suspension.rotation.z = side * 0.5;

            rover.add(suspension);

        }

    }


    // CAMERA MAST

    const mast = new THREE.Mesh(

        new THREE.CylinderGeometry(0.07, 0.07, 1.8, 8),

        silver

    );

    mast.position.set(0, 3, -0.5);

    rover.add(mast);


    const cameraHead = new THREE.Mesh(

        new THREE.BoxGeometry(0.7, 0.55, 0.5),

        dark

    );

    cameraHead.position.set(0, 3.9, -0.5);

    rover.add(cameraHead);


    // ROBOTIC ARM

    const arm = new THREE.Mesh(

        new THREE.CylinderGeometry(0.06, 0.06, 1.3, 8),

        silver

    );

    arm.position.set(-1.2, 1.7, 0.5);
    arm.rotation.z = 0.8;

    rover.add(arm);


    const tool = new THREE.Mesh(

        new THREE.BoxGeometry(0.4, 0.4, 0.4),

        gold

    );

    tool.position.set(-1.7, 2.2, 0.5);

    rover.add(tool);

}


/* =========================================================
   19. INGENUITY HELICOPTER
========================================================= */

function buildIngenuity() {

    const gold = material(0xbba66f, 0.5, 0.65);
    const dark = material(0x242a30, 0.7, 0.35);
    const silver = material(0xb9c0c5, 0.4, 0.75);

    const heli = new THREE.Group();

    heli.position.set(0, 0, -2);

    worldGroup.add(heli);


    // BODY

    const body = new THREE.Mesh(

        new THREE.BoxGeometry(1.2, 0.75, 1),

        gold

    );

    body.position.y = 4;

    heli.add(body);


    // ELECTRONICS BOX

    const electronics = new THREE.Mesh(

        new THREE.BoxGeometry(0.8, 0.5, 0.7),

        dark

    );

    electronics.position.y = 4.65;

    heli.add(electronics);


    // SOLAR PANEL

    const solar = new THREE.Mesh(

        new THREE.BoxGeometry(1.6, 0.08, 1.2),

        material(0x243c59, 0.35, 0.65)

    );

    solar.position.y = 5.1;

    heli.add(solar);


    // LEGS

    for (let i = 0; i < 4; i++) {

        const angle = (i / 4) * Math.PI * 2;

        const x = Math.sin(angle) * 0.9;
        const z = Math.cos(angle) * 0.9;

        const leg = new THREE.Mesh(

            new THREE.CylinderGeometry(0.045, 0.045, 1.5, 8),

            silver

        );

        leg.position.set(x, 3.2, z);

        heli.add(leg);

    }


    // LANDING FEET

    for (let side of [-1, 1]) {

        const foot = new THREE.Mesh(

            new THREE.CylinderGeometry(0.04, 0.04, 2.5, 8),

            silver

        );

        foot.rotation.z = side * 0.45;

        foot.position.set(side * 0.8, 2.8, 0);

        heli.add(foot);

    }


    // ROTOR MAST

    const mast = new THREE.Mesh(

        new THREE.CylinderGeometry(0.08, 0.08, 1.1, 8),

        silver

    );

    mast.position.y = 5.8;

    heli.add(mast);


    // ROTOR BLADES

    const rotor = new THREE.Group();

    rotor.position.y = 6.35;

    heli.add(rotor);


    for (let i = 0; i < 4; i++) {

        const blade = new THREE.Mesh(

            new THREE.BoxGeometry(4.5, 0.055, 0.2),

            dark

        );

        blade.rotation.y = (i / 4) * Math.PI;

        rotor.add(blade);

    }

    heli.userData.rotor = rotor;


    // CAMERA

    const cameraUnit = new THREE.Mesh(

        new THREE.BoxGeometry(0.3, 0.3, 0.3),

        dark

    );

    cameraUnit.position.set(0, 3.9, 0.65);

    heli.add(cameraUnit);

}


/* =========================================================
   20. DISCOVERY OBJECTS
========================================================= */

function buildDiscoveries() {

    const mission = missions[currentMission];

    mission.discoveries.forEach((discovery, index) => {

        const group = new THREE.Group();

        group.position.set(
            discovery.position[0],
            1.1,
            discovery.position[2]
        );

        worldGroup.add(group);


        const ring = new THREE.Mesh(

            new THREE.TorusGeometry(0.75, 0.035, 8, 32),

            new THREE.MeshBasicMaterial({
                color: 0x65d9ff,
                transparent: true,
                opacity: 0.85
            })

        );

        ring.rotation.x = Math.PI / 2;

        group.add(ring);


        const core = new THREE.Mesh(

            new THREE.OctahedronGeometry(0.22, 0),

            new THREE.MeshBasicMaterial({
                color: 0xa9edff
            })

        );

        core.position.y = 0.7;

        group.add(core);


        const light = new THREE.PointLight(
            0x43c9ff,
            1.5,
            5
        );

        light.position.y = 0.7;

        group.add(light);


        group.userData = {
            index,
            found: false,
            discovery
        };

        discoveryObjects.push(group);

    });

}


/* =========================================================
   21. PLAYER CONTROLS
========================================================= */

function enterWorld() {

    if (!missionRunning) return;

    missionPaused = false;

    hide($("startOverlay"));

    if (renderer && renderer.domElement.requestPointerLock) {

        renderer.domElement.requestPointerLock();

    }

}


$("enterWorld")?.addEventListener("click", enterWorld);


document.addEventListener("pointerlockchange", () => {

    pointerLocked =
        document.pointerLockElement === renderer?.domElement;

});


document.addEventListener("mousemove", event => {

    if (!pointerLocked || missionPaused) return;

    yaw -= event.movementX * 0.0022;
    pitch -= event.movementY * 0.0018;

    pitch = THREE.MathUtils.clamp(
        pitch,
        -0.85,
        0.85
    );

});


document.addEventListener("keydown", event => {

    const key = event.key.toLowerCase();

    keys[key] = true;

    if (
        ["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(key)
    ) {
        event.preventDefault();
    }


    if (!missionRunning || missionPaused) return;

    if (key === "e") {
        interactWithDiscovery();
    }

    if (key === "m") {
        toggleMap();
    }

    if (key === "escape") {
        pauseMission();
    }

});


document.addEventListener("keyup", event => {

    keys[event.key.toLowerCase()] = false;

});


/* =========================================================
   22. PLAYER MOVEMENT
========================================================= */

function updatePlayer(delta) {

    if (!camera || !missionRunning || missionPaused) return;

    const forward = new THREE.Vector3(
        -Math.sin(yaw),
        0,
        -Math.cos(yaw)
    );

    const right = new THREE.Vector3(
        Math.cos(yaw),
        0,
        -Math.sin(yaw)
    );

    const direction = new THREE.Vector3();

    if (keys["w"] || keys["arrowup"]) {
        direction.add(forward);
    }

    if (keys["s"] || keys["arrowdown"]) {
        direction.sub(forward);
    }

    if (keys["d"] || keys["arrowright"]) {
        direction.add(right);
    }

    if (keys["a"] || keys["arrowleft"]) {
        direction.sub(right);
    }

    if (direction.lengthSq() > 0) {

        direction.normalize();

        const speed = keys["shift"] ? 9 : 5;

        camera.position.addScaledVector(
            direction,
            speed * delta
        );

    }


    camera.position.x = THREE.MathUtils.clamp(
        camera.position.x,
        -65,
        65
    );

    camera.position.z = THREE.MathUtils.clamp(
        camera.position.z,
        -65,
        65
    );


    const isMars =
        currentMission === "sojourner" ||
        currentMission === "ingenuity";

    camera.position.y = 2.2 + terrainHeight(
        camera.position.x,
        camera.position.z,
        isMars
    );


    camera.rotation.order = "YXZ";

    camera.rotation.y = yaw;
    camera.rotation.x = pitch;


    const x = Math.round(camera.position.x);
    const z = Math.round(camera.position.z);

    setText(
        $("coordinates"),
        "X " + x + " / Z " + z
    );

}


/* =========================================================
   23. DISCOVERY INTERACTION
========================================================= */

function interactWithDiscovery() {

    if (discoveryOpen || !camera) return;

    let closest = null;
    let closestDistance = Infinity;

    discoveryObjects.forEach(object => {

        if (object.userData.found) return;

        const distance = camera.position.distanceTo(
            object.position
        );

        if (distance < closestDistance) {

            closestDistance = distance;
            closest = object;

        }

    });


    if (closest && closestDistance < 5.5) {

        revealDiscovery(closest);

    }

}


function revealDiscovery(object) {

    const data = object.userData.discovery;

    object.userData.found = true;

    discovered.push(object.userData.index);

    discoveryOpen = true;
    missionPaused = true;

    if (document.pointerLockElement) {
        document.exitPointerLock();
    }

    updateMissionText();

    updateDiscoveryPanel(data, object.userData.index);

    show($("discoveryPanel"));

    object.visible = false;

    if (discovered.length === missions[currentMission].discoveries.length) {

        setTimeout(() => {

            hide($("discoveryPanel"));

            discoveryOpen = false;

            show($("completePanel"));

            if (document.pointerLockElement) {
                document.exitPointerLock();
            }

        }, 1500);

    }

}


function updateDiscoveryPanel(data, index) {

    if (!data) {

        data = missions[currentMission].discoveries[index];

    }

    if (!data) return;

    setText($("discoveryTitle"), getText(data.title));
    setText($("discoveryText"), getText(data.text));

    setText(
        $("discoveryIndex"),
        "DATA ENTRY " + String(index + 1).padStart(2, "0")
    );

}


function closeDiscovery() {

    hide($("discoveryPanel"));

    discoveryOpen = false;

    if (
        discovered.length >= missions[currentMission].discoveries.length
    ) {
        show($("completePanel"));
        return;
    }

    missionPaused = false;

    enterWorld();

}


$("closeDiscovery")?.addEventListener("click", closeDiscovery);
$("dismissDiscovery")?.addEventListener("click", closeDiscovery);


/* =========================================================
   24. PAUSE SYSTEM
========================================================= */

function pauseMission() {

    if (!missionRunning || missionPaused || discoveryOpen) return;

    missionPaused = true;

    if (document.pointerLockElement) {
        document.exitPointerLock();
    }

    show($("pausePanel"));

}


function resumeMission() {

    hide($("pausePanel"));

    missionPaused = false;

    enterWorld();

}


$("pauseButton")?.addEventListener("click", pauseMission);
$("resumeButton")?.addEventListener("click", resumeMission);


/* =========================================================
   25. MAP SYSTEM
========================================================= */

function toggleMap() {

    if (!missionRunning || discoveryOpen) return;

    if (!$("mapPanel").classList.contains("hidden")) {

        closeMap();

        return;

    }

    missionPaused = true;

    if (document.pointerLockElement) {
        document.exitPointerLock();
    }

    show($("mapPanel"));

}


function closeMap() {

    hide($("mapPanel"));

    missionPaused = false;

    enterWorld();

}


$("mapButton")?.addEventListener("click", toggleMap);
$("closeMap")?.addEventListener("click", closeMap);
$("mapResume")?.addEventListener("click", closeMap);


/* =========================================================
   26. EXIT MISSION
========================================================= */

function exitMission() {

    missionRunning = false;
    missionPaused = false;
    discoveryOpen = false;

    if (document.pointerLockElement) {
        document.exitPointerLock();
    }

    hide($("pausePanel"));
    hide($("mapPanel"));
    hide($("discoveryPanel"));
    hide($("completePanel"));
    hide($("startOverlay"));

    setScreen("homeScreen");

}


$("exitButton")?.addEventListener("click", exitMission);
$("pauseExitButton")?.addEventListener("click", exitMission);
$("completeHome")?.addEventListener("click", exitMission);


/* =========================================================
   27. ANIMATION LOOP
========================================================= */

function animate() {

    animationFrame = requestAnimationFrame(animate);

    if (!renderer || !scene || !camera) return;

    const delta = Math.min(clock.getDelta(), 0.05);

    updatePlayer(delta);


    // ROTOR ANIMATION

    if (currentMission === "ingenuity" && worldGroup) {

        worldGroup.traverse(object => {

            if (object.userData.rotor) {

                object.userData.rotor.rotation.y += delta * 18;

            }

        });

    }


    // DISCOVERY ANIMATION

    discoveryObjects.forEach((object, index) => {

        if (object.userData.found) return;

        object.rotation.y += delta * 0.8;

        object.position.y =
            1.1 + Math.sin(clock.elapsedTime * 2 + index) * 0.15;

    });


    renderer.render(scene, camera);

}


/* =========================================================
   28. AMBIENT SPACE AUDIO
========================================================= */

function startAmbientAudio() {

    if (audioEnabled) return;

    try {

        audioContext = new (
            window.AudioContext ||
            window.webkitAudioContext
        )();

        masterGain = audioContext.createGain();

        masterGain.gain.value = 0.025;

        masterGain.connect(audioContext.destination);


        const oscillator1 = audioContext.createOscillator();

        oscillator1.type = "sine";
        oscillator1.frequency.value = 55;


        const oscillator2 = audioContext.createOscillator();

        oscillator2.type = "sine";
        oscillator2.frequency.value = 82;


        const gain1 = audioContext.createGain();

        gain1.gain.value = 0.55;


        const gain2 = audioContext.createGain();

        gain2.gain.value = 0.2;


        oscillator1.connect(gain1);
        oscillator2.connect(gain2);

        gain1.connect(masterGain);
        gain2.connect(masterGain);


        oscillator1.start();
        oscillator2.start();

        audioEnabled = true;

        $("soundToggle").textContent = "♫";

    } catch (error) {

        console.warn("Audio no disponible:", error);

    }

}


function stopAmbientAudio() {

    if (!audioEnabled) return;

    if (audioContext) {
        audioContext.close();
    }

    audioContext = null;
    masterGain = null;

    audioEnabled = false;

    $("soundToggle").textContent = "♪";

}


$("soundToggle")?.addEventListener("click", () => {

    if (audioEnabled) {
        stopAmbientAudio();
    } else {
        startAmbientAudio();
    }

});


/* =========================================================
   29. DISCOVERY SIGNAL
========================================================= */

function updateProximity() {

    if (!camera || !missionRunning || missionPaused) return;

    let nearest = Infinity;

    discoveryObjects.forEach(object => {

        if (object.userData.found) return;

        const distance = camera.position.distanceTo(
            object.position
        );

        nearest = Math.min(nearest, distance);

    });


    if (nearest < 5.5) {

        setText(
            $("proximity"),
            currentLanguage === "es"
                ? "SEÑAL DETECTADA · PRESIONA E"
                : "SIGNAL DETECTED · PRESS E"
        );

    } else {

        setText(
            $("proximity"),
            translations[currentLanguage].findSignal
        );

    }

}


/* =========================================================
   30. INITIALIZATION
========================================================= */

function main() {

    changeLanguage("es");

    if ($("languageSelect")) {
        $("languageSelect").value = "es";
    }

    setScreen("homeScreen");

    console.log(
        "%c NOVA SPACE EXPLORATION ",
        "background:#081426;color:#65d9ff;padding:10px;font-weight:bold;"
    );

    console.log("NOVA system initialized.");

}


/* =========================================================
   31. UPDATE LOOP
========================================================= */

setInterval(() => {

    updateProximity();

}, 150);


main();
