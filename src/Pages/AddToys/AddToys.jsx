import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddToys = () => {
     const { user } = useContext(AuthContext);

     const handleAddToy = event => {
          event.preventDefault();
          const form = event.target;
          const photo = form.photo.value;
          const name = form.name.value;
          const sellerName = form.sellerName.value;
          const sellerEmail = form.sellerEmail.value;
          const category = form.category.value;
          const price = form.price.value;
          const ratings = form.ratings.value;
          const quantity = form.quantity.value;
          const description = form.description.value;

          const user = {
               picture: photo,
               name: name,
               sellerName: sellerName,
               sellerEmail: sellerEmail,
               category: category,
               price: price,
               ratings: ratings,
               quantity: quantity,
               description: description
          }

          Swal.fire(
               'Toy added!',
               'successful!',
               'success'
          )

          fetch('https://toy-haven-server.vercel.app/users', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(user)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    if (data.insertedId > 0) {
                         alert('added toy successful')
                    }
               })
     }
     return (
          <div>
               <Helmet>
                    <title>Toy_Haven | Add Toy</title>
               </Helmet>
               <form onSubmit={handleAddToy} className="flex flex-col gap-4 mt-20">
                    <div>
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="photo URL"
                                   value="Photo URL"
                              />
                         </div>
                         <TextInput
                              id="photo"
                              type="text"
                              name="photo"
                              required={true}
                         />
                    </div>
                    <div>
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="name"
                                   value="Name"
                              />
                         </div>
                         <TextInput
                              id="name"
                              type="text"
                              name="name"
                              required={true}
                         />
                    </div>
                    <div>
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="sellerName"
                                   value="Seller Name"
                              />
                         </div>
                         <TextInput
                              id="sellerName"
                              type="text"
                              name="sellerName"
                              required={true}
                         />
                    </div>
                    <div>
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="sellerEmail"
                                   value="Seller Email"
                              />
                         </div>
                         <TextInput
                              id="sellerEmail"
                              type="text"
                              name="sellerEmail"
                              defaultValue={user?.email}
                              required={true}
                         />
                    </div>
                    <div id="category">
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="category"
                                   value="Category"
                              />
                         </div>
                         <Select
                              id="category"
                              name="category"
                              required={true}
                         >
                              <option>
                                   Trucks
                              </option>
                              <option>
                                   Sedans
                              </option>
                              <option>
                                   Sports Cars
                              </option>
                         </Select>
                    </div>
                    <div>
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="price"
                                   value="Price"
                              />
                         </div>
                         <TextInput
                              id="price"
                              type="number"
                              name="price"
                              required={true}
                         />
                    </div>
                    
                    <div id="ratings">
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="ratings"
                                   value="ratings"
                              />
                         </div>
                         <Select
                              id="ratings"
                              name="ratings"
                              required={true}
                         >
                              <option>
                                   1
                              </option>
                              <option>
                                   2
                              </option>
                              <option>
                                   3
                              </option>
                              <option>
                                   4
                              </option>
                              <option>
                                   5
                              </option>
                         </Select>
                    </div>
                    <div>
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="available quantity"
                                   value="Available Quantity"
                              />
                         </div>
                         <TextInput
                              id="quantity"
                              type="number"
                              name="quantity"
                              required={true}
                         />
                    </div>
                    <div id="textarea">
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="Detail description"
                                   value="Detail Description"
                              />
                         </div>
                         <Textarea
                              id="description"
                              placeholder="Toy Description"
                              name="description"
                              required={true}
                              rows={4}
                         />
                    </div>

                    <Button className='bg-pink-600 py-2 rounded-lg font-semibold text-white hover:bg-pink-800' type="submit">
                         Add Toy
                    </Button>
               </form>
          </div>
     );
};

export default AddToys;