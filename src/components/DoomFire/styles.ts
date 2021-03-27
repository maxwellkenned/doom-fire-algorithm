import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex: 1;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

export const Table = styled.table`
  border-collapse: collapse;
  /* border: 1px solid #000; */

  box-shadow: 0 2px 20px -10px rgba(0, 0, 0, 1);
`

export const TableData = styled.td`
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  text-align: center;
  vertical-align: middle;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  position: relative;
`

export const Pixel = styled(TableData)<{ bg: string }>`
  background-color: rgb(${props => props.bg});
  width: 4px;
  height: 4px;
  border: 0;
`

export const PixelIndex = styled.span`
  font-size: 10px;
  display: inline-block;
  position: absolute;
  top: 2px;
  right: 2px;
  color: #999;
`
