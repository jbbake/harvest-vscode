import Project from './Project'

let instance: ProjectCollection | null = null

class ProjectCollection {
  elements: Project[] = []

  constructor () {
    if (!instance) instance = this
    return instance
  }

  addOne = (project: Project): void => {
    this.elements.push(project)
  }

  addMany = (projects: Project[]): void => {
    projects.forEach((p: Project) => {
      this.elements.push(p)
    })
  }

  findById = (id: string): Project | undefined => {
    const project = this.elements.find((p: Project) => {
      return p.id === id
    })
    return project
  }

  findByName = (name: string): Project | undefined => {
    const project = this.elements.find((p: Project) => {
      return p.name === name
    })
    return project
  }
}