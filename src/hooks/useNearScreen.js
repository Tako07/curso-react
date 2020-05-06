import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(_ => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
    ).then(_ => {
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })
  }, [ref])

  return [show, ref]
}
