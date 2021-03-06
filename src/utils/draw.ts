import { IParticipants } from '../resources/db/models/Secret'
import { shuffle } from './shuffle'

export const draw = (participants: IParticipants[]) => {
  const result = []
  const shuffled = shuffle(participants)
  const total = shuffled.length

  for (let i = 0; i < total - 1; i++) {
    result.push({
      giver: shuffled[i],
      receiver: shuffled[i + 1],
    })
  }

  result.push({
    giver: shuffled[total - 1],
    receiver: shuffled[0]
  })

  return result
}