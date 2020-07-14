import React, { Component } from "react";
import moment from "moment";
import Timeline, {
    TimelineHeaders,
    SidebarHeader,
    DateHeader
  } from "react-calendar-timeline/lib";
import generateFakeData from "./GenerateData";
import 'react-calendar-timeline/lib/Timeline.css'

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title"
};

export default class GanttTimeline extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    const { groups, items } = generateFakeData();
    const defaultTimeStart = moment()
      .startOf("day")
      .toDate();
    const defaultTimeEnd = moment()
      .startOf("day")
      .add(1, "day")
      .toDate();

    this.state = {
      groups,
      items,
      defaultTimeStart,
      defaultTimeEnd
    };
  }

  enterFullScreen(){
    console.log(this.ref.current.requestFullscreen());
  }

  itemRenderer = ({ item, timelineContext, itemContext, getItemProps, getResizeProps }) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected ? (itemContext.dragging ? "red" : item.selectedBgColor) : item.bgColor;
    const borderColor = itemContext.resizing ? "red" : item.color;
    return (
      <div
        {...getItemProps({
          style: {
            backgroundColor,
            color: item.color,
            borderColor,
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 4,
            borderLeftWidth: itemContext.selected ? 3 : 1,
            borderRightWidth: itemContext.selected ? 3 : 1
          },
          onMouseDown: () => {
            console.log("on item click", item);
          }
        })}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

        <div
          style={{
            height: itemContext.dimensions.height,
            overflow: "hidden",
            paddingLeft: 3,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {itemContext.title}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
      </div>
    );
  };

  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { items, groups } = this.state;

    const group = groups[newGroupOrder];

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id
            })
          : item
      )
    });

    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  handleItemResize = (itemId, time, edge) => {
    const { items } = this.state;

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: edge === "left" ? time : item.start,
              end: edge === "left" ? item.end : time
            })
          : item
      )
    });

    console.log("Resized", itemId, time, edge);
  };

  render() {
    const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;

    return (
      <div>
        <button className="btn btn-secondary float-right fullscreen-btn mr-4" onClick={() => this.enterFullScreen()}>View Fullscreen</button>
        <div className="chart-container p-4" ref={this.ref}>
        
          <Timeline
            groups={groups}
            items={items}
            keys={keys}
            sidebarContent={<div className='text-success'>Above the Left</div>}
            itemTouchSendsClick={false}
            stackItems
            itemHeightRatio={0.75}
            showCursorLine
            canMove={false}
            canResize={false}
            defaultTimeStart={defaultTimeStart}
            defaultTimeEnd={defaultTimeEnd}
            itemRenderer={this.itemRenderer}
            onItemMove={this.handleItemMove}
            onItemResize={this.handleItemResize}
        >
            <TimelineHeaders>
                <SidebarHeader>
                {({ getRootProps }) => {
                    return <div className="rct-dateHeader-primary pt-2" {...getRootProps()}>Machines - ID</div>
                }}
                </SidebarHeader>
                <DateHeader unit="primaryHeader" />
                <DateHeader />
            </TimelineHeaders>
        </Timeline>
      </div>
      </div>
    );
  }
}
