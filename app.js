const getData = async () => {
  const resp = await fetch('./data.json')
  const data = await resp.json()

  return data
}

function renderChart(data) {
  const chartDisplay = document.querySelector('.chart__display')

  const values = data.map((el) => el.amount)
  const max = Math.max(...values)

  chartDisplay.innerHTML = `${data
    .map((el) => {
      const { amount, day } = el
      return `
      <div class="chart__col | flex">
       <div class="chart__drawing ${
         amount === max ? 'bg-cyan' : 'bg-red'
       }" style="--_height: ${Math.round(amount * 2.8)}px;"></div>
       <p class="chart__day">${day} </p>
      </div>`
    })
    .join(' ')}`
}

const renderPage = async () => {
  const data = await getData()
  renderChart(data)
}

renderPage()
