import "@webxdc/highscores";

import SPRITESHEET from "./asset/texture.json"
import { CENTER } from "./config"
import { createContext, renderContext } from "./modules/2d/context"
import { animSystem } from "./modules/entity/components/anim"
import { bodySystem } from "./modules/entity/components/body"
import { colorSystem } from "./modules/entity/components/color"
import { clearCache, polygonRender, polygonSystem } from "./modules/entity/components/polygon"
import { spriteRender } from "./modules/entity/components/sprite"
import { textRender } from "./modules/entity/components/text"
import { tilemapRender } from "./modules/entity/components/tilemap"
import { transformSystem } from "./modules/entity/components/transform"
import { addChild, createEntity, traverse } from "./modules/entity/entity"
import { schedule, update } from "./modules/scheduler"
import { $ } from "./modules/utils"
import { initGame } from "./scenes/game"

import "./main.css"

await window.highscores.init()

const ROOT = createEntity(["root", { t: [, CENTER] }])

schedule((delta) => {
  traverse(
    ROOT,
    (entity) => {
      transformSystem(entity)
      polygonSystem(entity)
      colorSystem(entity)
    },
    (entity) => {
      polygonRender(entity)
      tilemapRender(entity)
      spriteRender(entity)
      textRender(entity)
      animSystem(entity, delta)
      bodySystem(entity, delta)
    }
  )
  renderContext()
  clearCache()
}, 9)

createContext($<HTMLCanvasElement>("canvas"), SPRITESHEET, () => {
  addChild(ROOT, initGame())
  update()
})
