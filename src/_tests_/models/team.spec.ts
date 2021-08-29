import { TeamModel } from '../../models'

describe('Team class', () => {
  it('Position', () => {
    const team = new TeamModel()
    const position = {
      name: 'goalkeeper',
      tShirt: 1,
      skills: ['Kick hard', 'Run fast']
    }
    expect(team.position(position.name, position.tShirt, position.skills))
      .toEqual(['goalkeeper', 1, ['Kick hard', 'Run fast']])
  })
})
