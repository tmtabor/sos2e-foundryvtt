import { init_saga_machine } from "../saga-machine-foundryvtt/modules/init.js";

// Initialize Saga Machine with Shadows Over Sol config
init_saga_machine({
    level: "150",
    luck_label: "Edge",
    money_label: "Microcredits",
    origin_label: "Geneline",
    path_label: "Role",
    luck_exp: true,
    stress: true,
    theme: "sos"
});