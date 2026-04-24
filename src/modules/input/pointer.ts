import input from "."
import { emit, on } from "../event"
import { DOC } from "../utils"

const POINTER: number[] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]

function update(e?: PointerEvent, down?: number) {
    if (e) {
        POINTER[0] = e.clientX
        POINTER[1] = e.clientY
        emit("pointer", POINTER)
    }
    if (down !== undefined) {
        const target = "Mouse" + (e?.button ?? 0)
        input(target, down)
        emit(down ? "down" : "up", target)
    }
}

on("contextmenu", (e: MouseEvent) => e.preventDefault(), DOC)
    ("pointermove", (e: PointerEvent) => update(e), DOC)
    ("pointerdown", (e: PointerEvent) => update(e, 1), DOC)
    ("pointerup", (e: PointerEvent) => update(e, 0), DOC)
    ("pointercancel", (e: PointerEvent) => update(e, 0), DOC)

export default POINTER
