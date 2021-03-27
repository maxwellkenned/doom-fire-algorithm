import React, { useCallback, useEffect, useState } from 'react'

import { fireColorsPalette } from './fireColorsPalette'

import * as S from './styles'

interface IDoomFireProps {
  fireWidth?: number
  fireHeight?: number
  debug?: boolean
}

const useForceUpdate = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  return { increment, count }
}

const DoomFire: React.FC<IDoomFireProps> = ({
  fireWidth = 80,
  fireHeight = 45,
  debug = false,
}) => {
  const { increment: forceUpdate } = useForceUpdate()
  const [firePixelsArray, setFirePixelsArray] = useState<number[]>(() =>
    Array.from({ length: fireWidth * fireHeight }, () => 0)
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fireWithArray, setFireWithArray] = useState<number[]>(() =>
    Array.from({ length: fireWidth }, (_, i) => i)
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fireHeightArray, setFireHeightArray] = useState<number[]>(() =>
    Array.from({ length: fireHeight }, (_, i) => i)
  )

  const createFireIntensityPerPixel = useCallback(
    (currentPixelIndex: number) => {
      const belowPixelIndex = currentPixelIndex + fireWidth

      if (belowPixelIndex >= fireHeight * fireWidth) {
        return
      }

      const decay = Math.floor(Math.random() * 5)

      if (firePixelsArray[belowPixelIndex] - decay < 0) {
        return setFirePixelsArray(oldArr => {
          const newArr = oldArr
          newArr[currentPixelIndex] = 0
          return newArr
        })
      }

      setFirePixelsArray(oldArr => {
        const newArr = oldArr
        newArr[currentPixelIndex - decay] =
          firePixelsArray[belowPixelIndex] - decay
        return newArr
      })
    },
    [fireWidth, fireHeight, firePixelsArray]
  )

  const calculateFirePropagation = useCallback(() => {
    for (const column of fireWithArray) {
      for (const row of fireHeightArray) {
        const pixelIndex = column + fireWidth * row

        createFireIntensityPerPixel(pixelIndex)
      }
    }

    forceUpdate()
  }, [
    forceUpdate,
    fireWidth,
    fireWithArray,
    fireHeightArray,
    createFireIntensityPerPixel,
  ])

  const createFireSource = useCallback(() => {
    const overflowPixelIndex = fireWidth * fireHeight
    for (const column of fireWithArray) {
      const pixelIndex = overflowPixelIndex - fireWidth + column

      setFirePixelsArray(oldArr => {
        const newArr = oldArr
        newArr[pixelIndex] = 36
        return newArr
      })
    }
  }, [fireWidth, fireHeight, fireWithArray])

  const renderFire = fireHeightArray.map(row => {
    const rowsColumns = fireWithArray.map(column => {
      const pixelIndex = column + fireWidth * row
      const pixelIntensity = firePixelsArray[pixelIndex]

      if (debug) {
        return (
          <S.TableData key={`column-${column}`}>
            <S.PixelIndex>{pixelIndex}</S.PixelIndex>
            {pixelIntensity}
          </S.TableData>
        )
      }

      const colorString = fireColorsPalette[pixelIntensity]

      return <S.Pixel bg={colorString} key={`column-${column}`} />
    })

    return <tr key={`row-${row}`}>{rowsColumns}</tr>
  })

  const start = useCallback(() => {
    createFireSource()

    setInterval(() => {
      calculateFirePropagation()
    }, 1000)
  }, [createFireSource, calculateFirePropagation])

  useEffect(() => {
    start()
  }, [start])

  return (
    <S.Container>
      <S.Table>
        <tbody>{renderFire}</tbody>
      </S.Table>
    </S.Container>
  )
}

export default DoomFire
