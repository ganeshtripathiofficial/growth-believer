import React from "react"
import { createRoot } from "react-dom/client"
import Homepage from "./homepage/page"
import HeroPage from "./hero/page"
import LeadMagnetPage from "./lead-magnet/page"
import QuizPage from "./quiz/page"
import GrowthResultPage from "./growth-result/page"
import SalesPage from "./sales/page"
import OrderForm from "./order-form/page"
import ThankYouPage from "./thank-you/page"
import StorefrontPage from "./storefront/page"

function normalizePath(pathname: string) {
  const path = pathname.replace(/\/+$/, "")
  return path || "/"
}

function getPageForPath(pathname: string) {
  const path = normalizePath(pathname)
  switch (path) {
    case "/":
    case "/homepage":
    case "/preview/funnel/midnight-echo/homepage":
      return Homepage
    case "/hero":
    case "/preview/funnel/midnight-echo/hero":
      return HeroPage
    case "/lead-magnet":
    case "/preview/funnel/midnight-echo/lead-magnet":
      return LeadMagnetPage
    case "/quiz":
    case "/preview/funnel/midnight-echo/quiz":
      return QuizPage
    case "/growth-result":
    case "/preview/funnel/midnight-echo/growth-result":
      return GrowthResultPage
    case "/sales":
    case "/preview/funnel/midnight-echo/sales":
      return SalesPage
    case "/order-form":
    case "/preview/funnel/midnight-echo/order-form":
      return OrderForm
    case "/thank-you":
    case "/preview/funnel/midnight-echo/thank-you":
      return ThankYouPage
    case "/storefront":
    case "/preview/funnel/midnight-echo/storefront":
      return StorefrontPage
    default:
      return Homepage
  }
}

const Page = getPageForPath(window.location.pathname)
createRoot(document.getElementById("root")!).render(<React.StrictMode><Page /></React.StrictMode>)
