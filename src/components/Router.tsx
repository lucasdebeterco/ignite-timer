import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home.tsx'
import { History } from '../pages/History.tsx'
import { DefaultLayout } from '../layouts/DefaultLayout/index.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Route>
    </Routes>
  )
}
