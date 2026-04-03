import { useRef, useCallback } from 'react'

// 가로 스크롤 컨테이너를 마우스 드래그로 움직이는 훅
const useDragScroll = () => {
  const ref = useRef(null)
  const isDragging = useRef(false)
  const hasDragged = useRef(false) // 실제 이동이 있었는지 여부
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = useCallback((e) => {
    isDragging.current = true
    hasDragged.current = false
    startX.current = e.pageX - ref.current.offsetLeft
    scrollLeft.current = ref.current.scrollLeft
    ref.current.style.cursor = 'grabbing'
  }, [])

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return
    // 마우스 버튼이 이미 떼진 경우 드래그 종료
    if (e.buttons === 0) {
      isDragging.current = false
      ref.current.style.cursor = 'grab'
      return
    }
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    const walk = (x - startX.current) * 1.2 // 드래그 속도 배율
    // 5px 이상 움직이면 드래그로 간주
    if (Math.abs(x - startX.current) > 5) hasDragged.current = true
    ref.current.scrollLeft = scrollLeft.current - walk
  }, [])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
    ref.current.style.cursor = 'grab'
  }, [])

  const onMouseLeave = useCallback(() => {
    isDragging.current = false
    ref.current.style.cursor = 'grab'
  }, [])

  // 이미지 등 자식 요소의 기본 드래그 동작 차단
  const onDragStart = useCallback((e) => {
    e.preventDefault()
  }, [])

  // 드래그가 있었으면 캡처 단계에서 click 차단 (Link 이동 방지)
  const onClickCapture = useCallback((e) => {
    if (hasDragged.current) {
      e.stopPropagation()
      e.preventDefault()
      hasDragged.current = false
    }
  }, [])

  return { ref, onMouseDown, onMouseMove, onMouseUp, onMouseLeave, onDragStart, onClickCapture }
}

export default useDragScroll
