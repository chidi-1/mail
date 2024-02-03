import React from "react";
import viteLogo from '/vite.svg';

export default class ToolbarIconComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    handlerIconClick = event => {
        this.props.target.current.addChild(this.props.spawnFunction())
    }

    render() {
        return (
            <>
                <img onClick={this.handlerIconClick} src={viteLogo} />
            </>
        )
    }
}

/*
export default function ToolbarIconComponent ({isDragging}) {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: ItemTypes.ToolbarIconComponent,
            item: { text },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }),
        []
    )

    return (
        <div ref={dragRef} style={{ opacity }}>
            <img src={viteLogo} />
        </div>
    )
}*/
