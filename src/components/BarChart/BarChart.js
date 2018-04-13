import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { min, max } from 'd3-array';
import { select } from 'd3-selection';

class BarChart extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }

   componentDidMount() {
      this.createBarChart()
   }

   componentDidUpdate() {
      this.createBarChart()
   }

   createBarChart() {
      const node = this.node
      const dataMin = min(this.props.data)
      const dataMax = max(this.props.data)
      const yScale = scaleLinear()
         .domain([dataMin, dataMax])
         .range([50, this.props.size[1]])

   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()
   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 50)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 50)
   }

render() {
      console.log(this.node);
      return <svg ref={node => this.node = node}
      width={500} height={500}>
      </svg>
   }
}
export default BarChart