import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Nuevas características
        "fix", // Corrección de errores
        "docs", // Cambios en documentación
        "style", // Cambios de formato, puntos y comas faltantes (no afecta lógica)
        "refactor", // Refactorización de código que no corrige errores ni añade funciones
        "perf", // Mejoras de rendimiento
        "test", // Añadir o corregir pruebas
        "chore", // Tareas de mantenimiento, modificaciones a configuraciones (ej. Husky, build)
        "ci", // Cambios en flujos de integración continua (GitHub Actions)
      ],
    ],
  },
};

export default Configuration;
