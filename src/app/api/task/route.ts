
export function getData() {
  return [
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
    },
  ]
}

export function GET() {
  return Response.json(getData())
}
