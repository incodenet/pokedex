import {useCallback, useEffect, useRef, useState} from 'react';
import {Images} from 'assets/images';
import {PAGING_SIZE_OPTIONS} from 'constants/options';
import {getPokedexService, getPokemonsService} from 'services/app';
import {CCard} from 'components/containers/c-card';
import {CardDetails} from 'components/popups/card-details';
import {PLoader} from 'components/primitives/p-loader';
import {
  filterPanel,
  filterTitle,
  filterWrapper,
  listing,
  wrapper,
  notFound,
  pagination,
  pagingItem,
  container,
} from './page-home.styles';
import {Button, Col, Input, Row, Select, Typography} from 'antd';
import {NameAndUrl, Pokemon} from 'types/api';
import {DEFAULT_OFFSET_SIZE, DEFAULT_PAGING_SIZE} from 'constants/common';
import {useDispatch, useSelector} from 'react-redux';
import {appLoadingSelector, appPokeCountSelector, appPokedexSelector} from 'store/app/selectors';
import {getPokedexAction} from 'store/app/actions';

const {Text} = Typography;

export const PageHome = () => {
  const loading = useSelector(appLoadingSelector);
  const pokedex = useSelector(appPokedexSelector);
  const pokeCount = useSelector(appPokeCountSelector);
  const dispatch = useDispatch();

  const [pagingSize, setPagingSize] = useState<number>(DEFAULT_PAGING_SIZE);
  const [pagingMaxSize, setPagingMaxSize] = useState<number>();
  const [offsetSize, setOffsetSize] = useState<number>(DEFAULT_OFFSET_SIZE);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [popup, setPopup] = useState<{visible: boolean; itemEntity: Pokemon}>({
    visible: false,
    itemEntity: {},
  });

  const [filterState, setFilterState] = useState({
    name: '',
    species: '',
    type: '',
  });

  const getPokes = useRef(true);

  useEffect(() => {
    if (pokedex.length === 0) dispatch(getPokedexAction());

    setPagingMaxSize(Math.ceil(pokeCount / pagingSize));

    setPokemons([]);
    getPokemons(pokedex);
  }, [pokedex]);

  const getPokemons = useCallback(async (res: NameAndUrl[]) => {
    if (!getPokes.current) return;

    res.map(async (item: NameAndUrl) => {
      try {
        const {data} = await getPokemonsService(item.url!);

        setPokemons(state => {
          state = [...state, data];

          state.sort((a, b) => (a?.id! > b?.id! ? 1 : -1));

          return state;
        });
      } catch (e) {
        console.error(e);
      }

      getPokes.current = false;
    });
  }, []);

  // const handlePaginate = useCallback(
  //   async (offset: number, limit: number) => {
  //     try {
  //       const {data} = await getPokedexService({offset, limit});

  //       setPokemons([]);
  //       getPokemons(data?.results);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  //   [offsetSize]
  // );

  // useEffect(() => {
  //   handlePaginate(offsetSize, pagingSize);
  // }, [offsetSize]);

  const handlePagingSizeChange = useCallback(async (size: number) => {
    setPagingSize(size);

    dispatch(getPokedexAction({limit: size}));

    setPagingMaxSize(Math.ceil(pokeCount / pagingSize));

    setPokemons([]);
    getPokemons(pokedex);
  }, []);

  const handleFilterSubmit = ({name, value}: {name: string; value: string}) => {
    setFilterState({...filterState, [name]: value});
  };

  return (
    <div>
      {loading ? (
        <PLoader />
      ) : (
        <>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className={wrapper}
          >
            <div className={filterWrapper}>
              <div className={filterTitle}>Filter by:</div>
              <div className={filterPanel}>
                <Input
                  type="text"
                  placeholder="Name"
                  onChange={e => {
                    handleFilterSubmit({name: 'name', value: e.target.value});
                  }}
                />
                <Input
                  type="text"
                  placeholder="Species"
                  onChange={e => {
                    handleFilterSubmit({name: 'species', value: e.target.value});
                  }}
                />
                <Input
                  type="text"
                  placeholder="Type"
                  onChange={e => {
                    handleFilterSubmit({name: 'type', value: e.target.value});
                  }}
                />
              </div>
            </div>

            {pokemons.length ? (
              <div className={container}>
                <div className={listing}>
                  {pokemons?.map((itemEntity: Pokemon) => (
                    <CCard
                      key={`poke-${itemEntity?.id}-${itemEntity?.base_experience}`}
                      itemEntity={itemEntity}
                      onClick={() =>
                        setPopup({
                          ...popup,
                          visible: true,
                          itemEntity,
                        })
                      }
                    />
                  ))}
                </div>
                <Row gutter={15} className={pagination}>
                  <Col>
                    <Button
                      onClick={() => {
                        setOffsetSize(prev => {
                          if (prev !== DEFAULT_OFFSET_SIZE) {
                            prev -= pagingSize;
                          }

                          return prev;
                        });
                      }}
                      disabled={offsetSize === DEFAULT_OFFSET_SIZE}
                    >
                      Prev
                    </Button>
                  </Col>
                  <Col>
                    <Row gutter={[15, 15]}>
                      {[...Array(pagingMaxSize)].map((_, i) => (
                        <Col key={`page-${i + 1}`} className={pagingItem}>
                          <Button
                            onClick={() => {
                              setOffsetSize(prev => prev * i);
                            }}
                          >
                            {i + 1}
                          </Button>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                  <Col>
                    <Button
                      onClick={() => {
                        setOffsetSize(prev => {
                          if (prev !== DEFAULT_OFFSET_SIZE) {
                            prev += pagingSize;
                          }

                          return prev;
                        });
                      }}
                      disabled={offsetSize === pagingMaxSize}
                    >
                      Next
                    </Button>
                  </Col>
                  <Col>
                    <Row align="middle" gutter={3}>
                      <Col>
                        <Text>Show by:</Text>
                      </Col>
                      <Col>
                        <Select
                          options={PAGING_SIZE_OPTIONS}
                          defaultValue={pagingSize}
                          onChange={val => {
                            handlePagingSizeChange(val);
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            ) : (
              <div className={notFound}>
                <img src={Images.NotFound} alt="Not found" />
                <h3>Nothing found...</h3>
              </div>
            )}
          </form>

          <CardDetails content={popup} onClose={() => setPopup({...popup, visible: false, itemEntity: {}})} />
        </>
      )}
    </div>
  );
};
