
export function getData() {
  return new Promise<Array<StudyTask>>(resolve => {
    setTimeout(() => resolve([
      {
        title: "A task title",
        isFinished: true,
        url: "http://localhost:3000/asdf"
      },
      {
        title: "A 2nd task title",
        isFinished: false,
        url: "http://localhost:3000/dfed"
      },
      {
        title: "A 3rd and final task title",
        isFinished: true,
      }
    ]), 500)
  })
}

export async function GET() {
  const data = await getData()
  return Response.json(data)
}
