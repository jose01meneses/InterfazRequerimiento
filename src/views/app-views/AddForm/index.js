import React, { useState, useEffect } from "react";
import PageHeaderAlt from "components/layout-components/PageHeaderAlt";
import { Form, Button, message } from "antd";
import Flex from "components/shared-components/Flex";
import GeneralField from "./GeneralField";

import ProductListData from "assets/data/product-list.data.json";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const ADD = "ADD";
const EDIT = "EDIT";

const ProductForm = (props) => {
  const viewInfo = props.componentsView;
  
  let showButton = (viewInfo === "Taxation" ? true :false );
  
  

  const { mode = ADD, param } = props;

  const [form] = Form.useForm();
  const [uploadedImg, setImage] = useState("");
  const [uploadLoading, setUploadLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    if (mode === EDIT) {
      console.log("is edit");
      console.log("props", props);
      const { id } = param;
      const produtId = parseInt(id);
      const productData = ProductListData.filter(
        (product) => product.id === produtId
      );
      const product = productData[0];
      form.setFieldsValue({
        comparePrice: 0.0,
        cost: 0.0,
        taxRate: 6,
        description:
          "There are many variations of passages of Lorem Ipsum available.",
        category: product.category,
        name: product.name,
        price: product.price,
      });
      setImage(product.image);
    }
  }, [form, mode, param, props]);

  const handleUploadChange = (info) => {
    if (info.file.status === "uploading") {
      setUploadLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImage(imageUrl);
        setUploadLoading(true);
      });
    }
  };

  const onFinish = () => {
    setSubmitLoading(true);
    form
      .validateFields()
      .then((values) => {
        setTimeout(() => {
          setSubmitLoading(false);
          if (mode === ADD) {
            message.success(`Movimiento agregado`);
          }
          if (mode === EDIT) {
            message.success(`Product saved`);
          }
        }, 1500);
      })
      .catch((info) => {
        setSubmitLoading(false);
        console.log("info", info);
        message.error("Please enter all required field ");
      });
  };

  

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        initialValues={{
          heightUnit: "cm",
          widthUnit: "cm",
          weightUnit: "kg",
        }}
      >
        <PageHeaderAlt className="border-bottom" overlap>
          <div className="container">
            <Flex
              className="py-2"
              mobileFlex={false}
              justifyContent="between"
              alignItems="center"
            >
              
            </Flex>
          </div>

          <GeneralField
            uploadedImg={uploadedImg}
            uploadLoading={uploadLoading}
            handleUploadChange={handleUploadChange}
            viewtype={viewInfo}
          />
          
          <div className="container"  >
            <Flex
              className="py-2"
              mobileFlex={false}
              justifyContent="between"
              alignItems="center"
            >
              <Button className="mr-2"
              hidden ={showButton}
              >Cancelar</Button>
              <Button
                type="primary"
                onClick={() => onFinish()}
                htmlType="submit"
                loading={submitLoading}
                hidden ={showButton}
              >
                Agregar
              </Button>
            </Flex>
          </div>
        </PageHeaderAlt>
      </Form>
    </>
  );
};

export default ProductForm;
