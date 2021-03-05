import React, { useState } from 'react';
import '../../App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';
import { v4 } from 'uuid';
import {
  FiEdit2,
  AiOutlineDelete,
  RiDeleteBinLine,
  IoCheckmarkDoneCircleSharp,
} from 'react-icons/all';
import { Link } from 'react-router-dom';

// css imports
import {
  Column,
  Wrapper,
  DroppableCol,
  CardQuater,
  CardHeader,
  CardHeaderText,
  CardLink,
  CardText,
  ItemHeader,
  CardActions,
} from './QuaterStyle';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const item = {
  id: v4(),
  course_id: 16646,
  unique_id: 210360,
  school: 'WCAS',
  title: 'Politics of Black Popular Culture',
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  subject: 'AF_AM_ST',
  number: '327-0',
  credits: '4 credits',
  color: 'green',
};

const item2 = {
  id: v4(),
  school: 'WCAS',
  title: 'Africans in Colonial Latin America',
  subject: 'AF_AM_ST',
  number: '348-0',
  credits: '4 credits',
};

const item3 = {
  id: v4(),
  school: 'CS',
  title: 'Intro to Computer Programming',
  subject: 'COMP',
  number: '348-0',
  credits: '4 credits',
};

function Quaters() {
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => setEdit(true)
  const handleCloseEdit = () => setEdit(false) 

  const handleAdd = () => setAdd(true);
  const handleAddClose = () => setAdd(false);

  const [state, setState] = useState({
    SemesterOne: {
      title: 'Fall 2020',
      credits: '4 credits',
      items: [item, item2, item3],
    },
    SemesterTwo: {
      title: 'Winter 2020',
      credits: '4 credits',
      items: [],
    },
    SemesterThree: {
      title: 'Summer 2020',
      credits: '4 credits',
      items: [],
    },
  });

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    // Creating a copy of item before removing it from state
    const itemCopy = { ...state[source.droppableId].items[source.index] };

    setState((prev) => {
      prev = { ...prev };
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1);

      // Adding to new items array location
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };

  return (
    <Wrapper>
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return (
            <Column key={key} className={'column'}>
              <ItemHeader
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div>
                  <p style={{ fontWeight: '900' }}>{data.title}</p>
                  <p style={{ color: '#9a998c', marginTop: '6px' }}>
                    {data.credits}
                  </p>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '6px' }}>
                    <FiEdit2 onClick={handleEdit} style={{ fontSize: '16px' }} />

                    <Modal show={edit} onHide={handleCloseEdit}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit Semester</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Edit semester body
                      </Modal.Body>
                    </Modal>

                  </div>
                  <div>
                    <AiOutlineDelete />
                  </div>
                </div>
              </ItemHeader>
              <Droppable droppableId={key}>
                {(provided, snapshot) => {
                  return (
                    <DroppableCol
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {data.items.map((el, index) => {
                        return (
                          <Draggable
                            key={el.id}
                            index={index}
                            draggableId={el.id}
                          >
                            {(provided, snapshot) => {
                              // console.log(snapshot);
                              return (
                                <CardQuater
                                  className={`item ${
                                    snapshot.isDragging && 'dragging'
                                  }`}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <CardHeader>
                                    <p style={{fontSize: '1rem', margin: '0', padding: '0'}}>
                                      {el.subject} {el.number}
                                    </p>

                                    {/* description modal */}
                                    <CardLink  onClick={handleShow}>
                                      ...
                                    </CardLink>

                                    <Modal show={show} onHide={handleClose}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>{el.title}</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                       {el.description}
                                      </Modal.Body>
                                    </Modal>
                                  </CardHeader>
                                  <p style={{fontSize: '.8rem', margin: '0', padding: '0'}}>{el.title}</p>
                                  <CardText style={{fontSize: '.7rem', margin: '0'}}>
                                    <>{el.credits}</> |{' '}
                                    <>Fall, Spring , Summer</>
                                  </CardText>

                                  <CardActions>
                                    <IoCheckmarkDoneCircleSharp
                                      style={{ marginRight: '.3rem' }}
                                    />
                                    <RiDeleteBinLine />
                                  </CardActions>
                                </CardQuater>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </DroppableCol>
                  );
                }}
              </Droppable>
              <Link onClick={handleAdd} style={{ fontSize: '.8rem', marginLeft: '4px' }} to='#'>
                add course +
              </Link>

              <Modal show={add} onHide={handleAddClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Add Course Body
                </Modal.Body>
              </Modal>

            </Column>
          );
        })}
      </DragDropContext>
    </Wrapper>
  );
}

export default Quaters;
