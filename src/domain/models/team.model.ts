import { ITeam } from '../../interfaces/team.interface'
export class TeamModel implements ITeam {
  position (name: string, tShirt: number, skills: any): any {
    return [
      name,
      tShirt,
      skills
    ]
  }
}
