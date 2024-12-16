import { INFO } from "@/features/cv/state/const"
import Translation from "@/features/cv/state/locale";

export const Info = () => {
  return (
    <section className="d-flex flex-column bg-gray-400 w-100 br p-3 mx-3 mt-3">
      <div className="d-flex flex-row justify-content-between">
        <span className="ts-6 fw-semibold flex-1">{Translation.key("phone")}</span>
        <a href={`tel:${INFO.phone}`} className="flex-2 text-start">
          <span className="fs-6 fw-normal">{INFO.phone}</span>
        </a>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <span className="ts-6 fw-semibold flex-1">{Translation.key("email")}</span>
        <a href={`mailto:${INFO.email}`} className="flex-2 text-start">
          <span className="fs-6 fw-normal">{INFO.email}</span>
        </a>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <span className="ts-6 fw-semibold flex-1">{Translation.key("linkedin")}</span>
        <a href={INFO.linkedin_href} className="flex-2 text-start" target="_blank" rel="noreferrer">
          <span className="fs-6 fw-normal">{INFO.linkedin}</span>
        </a>
      </div>
    </section>
  )
}