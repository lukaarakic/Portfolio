type Project = {
  assignment: string
  execution: null | string
  live_url: string
  mockup: Image
  name: string
  objective: string
  platform: string
  project_images: Image[]
  project_overview: null | string
  role: string
  tehnologies: string
}

type Image = {
  alt: null | string
  copyright: null
  dimensions: {
    width: number
    height: number
  }
  edit: { x: number; y: number; zoom: number; background: string }
  id: string
  url: string
}
